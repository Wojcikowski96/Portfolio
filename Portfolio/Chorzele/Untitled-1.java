@RestResource(urlMapping = '/Participant_c/*')
global with sharing class Participant_REST_API {
    
    @HttpGet
    global static List<ParticipantWrapper> getTestingrecords() {
        
        List<Participant__c> rawParticipants = new List<Participant__c>();
        List<ParticipantWrapper> participantsWrappers = new List<ParticipantWrapper>();
        
        RestRequest request = RestContext.request;
        String emailFromURL = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);
        
        if(String.isBlank(emailFromURL)){
            rawParticipants = [SELECT Id, Name, Last_Name__c, Birthday__c, Phone__c, Email__c FROM Participant__c];
        }else{
            rawParticipants = [SELECT Id, Name, Last_Name__c, Birthday__c, Phone__c, Email__c FROM Participant__c WHERE Email__c = :emailFromURL];
        }
        
        
        for(Integer i=0;i<rawParticipants.size();i++) {
            participantsWrappers.add(new ParticipantWrapper(rawParticipants[i].Id, rawParticipants[i].name, rawParticipants[i].Last_Name__c, rawParticipants[i].Birthday__c, rawParticipants[i].Phone__c, rawParticipants[i].Email__c));
        }
        return participantsWrappers;
    }
    
    @HttpPost
    global static void doPost(List <ParticipantWrapper> participantWrappers) {
        Map<String, String> jsonComponents = new Map<String, String>();
        try{
            
            List<Participant__c> participantsToInsert = new List<Participant__c>();
            List<Participant__c> participantIDs = [SELECT Id FROM Participant__c];
            List<Participant__c> participantsToUpdate = new List<Participant__c>();
            
            for (ParticipantWrapper participantwrapper : participantWrappers) {    
                
                checkFieldsValidity(participantwrapper);
                
                Participant__c newParticipant = new Participant__c(
                    Id = participantwrapper.participantID,
                    Name = participantwrapper.name,
                    Last_Name__c = participantwrapper.lastName,
                    Birthday__c = participantwrapper.birthday,
                    Phone__c = participantwrapper.phone,
                    Email__c = participantwrapper.email
                );
                participantsToInsert.add(newParticipant);
            }
            
            jsonComponents.put('responseCode:', 'Code 200');
            jsonComponents.put('message:', 'updated list of participants');
            
            Database.upsert(participantsToInsert, false);
            
        }catch(SalesforceException e){
            RestContext.response.statusCode = 500;     
            jsonComponents.put('responseCode:', e.errorCode);
            jsonComponents.put('message:', e.message);
            
        }
        RestContext.response.responseBody = Blob.valueOf(JSON.serialize(jsonComponents));
    }
    
    
    public static void checkFieldsValidity(ParticipantWrapper p){
        if(p.phone == null || p.phone.length() != 9  || !p.phone.isNumeric()){
            throw new SalesforceException('500 Code', 'Wrong phone format provided');
        }
        
        if(p.name == null || p.name.length() > 80){
            throw new SalesforceException('500 Code', 'Bad or null participant name provided');
        }
        
        if(p.lastName == null ||  p.lastName.length() > 255){
            throw new SalesforceException('500 Code', 'Bad or null second name provided');
        }
        
        if(p.email == null || !Utils.checkIfEmailValid(p.email)){
            throw new SalesforceException('500 Code', 'Bad formated or null email provided');
        }
        
        if(p.birthday == null || !Utils.checkIfDateValid(p.birthday)){
            throw new SalesforceException('500 Code', 'Bad formated or null date provided');
        }
    }
}