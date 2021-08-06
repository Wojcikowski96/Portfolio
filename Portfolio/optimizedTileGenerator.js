$(document).ready(function() {
console.log('jestem');
setTimeout(() => {  
    for(i=0;i<48;i++){
        createTile(i);
        $('.tile').each( function(i){
            console.log('indeks: ',i);
            if(i <= 2){
                console.log("Tile o indeksie 2");
                $(this).css({'opacity':'1', left:'0px',});
            }    
      }); 
    }
    $(".loading-wrapper").hide(100);  
}, 2000); 
 
});