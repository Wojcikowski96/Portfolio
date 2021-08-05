$(document).ready(function() {
createTile(0);
createTile(1);
createTile(2);
var i = 3; 



    /* Every time the window is scrolled ... */
    var newY = 840;
    console.log('new Y', newY);
    $(window).scroll( function(){
        var scrollY = window.scrollY + 840;
        console.log('scroll Y', scrollY);
            /* If the object is completely visible in the window, fade it it */   
            
            if (scrollY >= newY ){
                createTile(i);
                i++;
                console.log('Tworzę tila');
                newY += 286;
                console.log('newY', newY);
            }
           

    });
    
});