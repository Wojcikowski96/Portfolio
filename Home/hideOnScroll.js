$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
        $('.about-us-wrapper').stop().animate({height: "120px"},200);
    }
    else {
         $('.about-us-wrapper').stop().animate({height: "490px", opacity: '1'},200);   
    }
});