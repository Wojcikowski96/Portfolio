
    function js_send(){
        var name = document.getElementById("nameInput").value;
        var email = document.getElementById("emailInput").value;
        var message = document.getElementById("messageInput").value;
        
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "wojcikowski1@gmail.com",
            Password : "A9BACDF33CF6089084D53E9273A81531BCCC",
            To : 'einfall@vp.pl',
            From : email,
            Subject : "Mail od potencjalnego klienta - "+name,
            Body : message
            }).then(
              message => alert(message),
              
            );
    }

