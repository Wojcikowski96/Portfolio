
  $(document).ready(function() {
   console.log('przygot dokument');
    $('.tile').each( function(i){
        console.log('indeks: ',i);
        if(i <= 2){
            console.log("Tile o indeksie 2");
            $(this).css({'opacity':'1', left:'0px',});
        }    
  }); 
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
          console.log('scroll');
      
          /* Check the location of each desired element */
          $('.tile').each( function(i){
 
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    $(this).animate({'opacity':'1', left:'0px',},250);
  
                }
           
              
          }); 
      
      });
      
  });