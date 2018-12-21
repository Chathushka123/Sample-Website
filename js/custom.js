/*====================================
            Services
=====================================*/
$(function () {
    /* animation on scroll */
    new WOW().init();
});


/*====================================
            Work
=====================================*/
$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});


/*====================================
           team
=====================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        
         responsive : {
            // breakpoint from 0 up
            0 : {

                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 2
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });
});


/*====================================
           testimonial
=====================================*/
$(function () {
    $("#customer-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        autoplayHoverPause: true
    });
});



/*====================================
           stats
=====================================*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


/*====================================
           client
=====================================*/

$(function () {
    $("#client-list").owlCarousel({
        items: 5,
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        autoplayHoverPause: true,
        
        responsive : {
            // breakpoint from 0 up
            0 : {

                items:1
            },
            // breakpoint from 480 up
            480 : {
                items:3
            },
            // breakpoint from 768 up
            768 : {
                items:5
            },
            // breakpoint from 768 up
            992 : {
                items:6
            }
        }
    });
});


/*====================================
           Navigation
=====================================*/

// Show/Hide transparent black navigation

$(function () {
    
    $(window).scroll(function(){
        
        if($(this).scrollTop() < 50){
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        }
        else{
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
            
        }
    });
});


// smooth scroll
$(function () {
   
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        
        //get/return id like #about, #work and etc
        
        var section=$(this).attr("href");
        
        $("html,body").animate({
            scrollTop:$(section).offset().top -64
        },1250,"easeInOutExpo");
    });
    
});
// close mobile menuon click
$(function () {
    $(".navbar-collapse ul li a").on("click touch" ,function(){
        $(".navbar-toggle").click();
    });
});



















