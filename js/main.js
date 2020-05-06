/*-----------------------------------------------------------------------------------

    Theme Name: ronny
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Version: 1.0

-----------------------------------------------------------------------------------*/

// == Table Of Content
//
//	01 Navbar scrollIt
//	02 nav-toggle
//	03 portfolio taps
//	04 portfolio mixitup
//	05 services carousel
//  06 - progress bar
  
$(function(){
    
    "use strict";
    var wind = $(window);

/* ----------------------------------------------------------------
                [ 01 Navbar ( scrollIt ) ]
-----------------------------------------------------------------*/
$.scrollIt({
    upKey: 38,                // key code to navigate to the next section
    downKey: 40,              // key code to navigate to the previous section
    easing: 'swing',          // the easing function for animation
    scrollTime: 800,          // how long (in ms) the animation takes
    activeClass: 'active',    // class given to the active nav element
    onPageChange: null,       // function(pageIndex) that is called when page is changed
    topOffset: -70            // offste (in px) for fixed top navigation
  });
    
/* ----------------------------------------------------------------
                [ 02 nav-toggle ]
-----------------------------------------------------------------*/
    $("#nav-toggle .btn").on("click", function(){
        $(this).toggleClass("active");
        $(".right-nav").slideToggle(500);
    });
    
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar");

        if(bodyScroll > 500){

            navbar.addClass("nav-fix");

        }else{

            navbar.removeClass("nav-fix");
        }
    });
    
/* ----------------------------------------------------------------
                [ 03- portfolio taps ]
-----------------------------------------------------------------*/
    $('.portfolio .taps span').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    
/* ----------------------------------------------------------------
                [ 04 - portfolio mixitup ]
-----------------------------------------------------------------*/
    var containerEl = document.querySelector('.portfolio .items');
    var mixer = mixitup(containerEl);

/* ----------------------------------------------------------------
                [ 05 - services carousel ]
-----------------------------------------------------------------*/
    $('.services .owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        responsiveClass:true,
        dots: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
    });
 /* ----------------------------------------------------------------
                // window loading
-----------------------------------------------------------------*/   
$(window).on("load",function (){

    // 09- loading
      $(".loading").fadeOut(1000);

    });
    
});
