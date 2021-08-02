$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
        $('.about-us-wrapper').stop().animate({height: "100px"},200);
    }
    else {
         $('.about-us-wrapper').stop().animate({height: "400px", opacity: '1'},200);   
    }
});