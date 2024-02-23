(function($) {
    'use strict';

/*============ Scroll Up Activation ============*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });

/*=========== Mobile Menu ===========*/
    $('nav.mobilemenu__nav').meanmenu({
        meanMenuClose: 'X',
        meanMenuCloseSize: '18px',
        meanScreenWidth: '991',
        meanExpandableChildren: true,
        meanMenuContainer: '.mobile-menu',
        dots: false
    });

/*=========== Sticky Header ===========*/
    function stickyHeader() {
        $(window).on('scroll', function () {
            var sticky_menu = $('.sticky__header');
            var pos = sticky_menu.position();
            if (sticky_menu.length) {
                var windowpos = sticky_menu.top;
                $(window).on('scroll', function () {
                  var windowpos = $(window).scrollTop();
                  if (windowpos > pos.top + 250) {
                    sticky_menu.addClass('is-sticky');
                  } else {
                    sticky_menu.removeClass('is-sticky');
                  }
            });
          }
        });
    }
    stickyHeader();

/*===========  Testimonial Slick Carousel =============*/
/* Testimonial Index */
    $('.testext_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: false,
        prevArrow: '<button type="button" class="wen-slick-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="wen-slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
        fade: true,
        dots: false,
        asNavFor: '.thumb_active'
    });


/*============= Testimonial Slick Carousel As Nav =============*/
/* Testimonial Index */
    $('.thumb_active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testext_active',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                dots: false,
                slidesToShow: 1,  
                centerPadding: '0px',
                }
            },
            {
              breakpoint: 769,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 2,
                centerMode: false,
                }
            },
            {
              breakpoint: 420,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });


/*=============  Produst Activation  ==========*/
/* Related Products */ /* Upsell Products */
    $('.productcategory__slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:4,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:4
            },
            768:{
                items:3
            },
            576:{
                items:2
            },
            1920:{
                items:4
            }
        }
    });


/*=============  Produst Activation  ==========*/
/* Related Products */ /* Upsell Products */
    $('.productcategory__slide--2').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:3,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
              items:1
            },
            576:{
              items:2
            },
            768:{
              items:3
            },
            1920:{
              items:3
            }
        }
    });


/*=============  Product Activation ============*/
/* All Product */
    $('.product__indicator--4').owlCarousel({
        margin:30,
        nav:true,
        autoplay: false,
        loop:true,
        items:4,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        responsive:{
            0:{
              items:1
            },
            576:{
              items:2
            },
            768:{
              items:3
            },
			      992:{
                items:4
            },
            1920:{
              items:4
            }
        }
    });
  

/*=============  Product Activation  ==============*/
/* New Product */
    var furnitureOwl = $('.furniture--4');
    furnitureOwl.owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      autoplay: false,
      autoplayTimeout: 10000,
      items: 4,
      addClassActive: true,
      dots: false,
      margin: 30,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        },
        1920: {
          items: 4
        }
      }
    });

/*============= Search Toggler ==============*/
/* Search */
    function searchToggler() {
        var trigger = $('.search__active'),
          container = $('.search_active');
        trigger.on('click', function (e) {
          e.preventDefault();
          container.toggleClass('is-visible');
        });
        $('.close__wrap').on('click', function () {
          container.removeClass('is-visible');
        });
    }
    searchToggler();


/*============= Cart Toggler ==============*/
/* Mini cart */
    function cartToggler() {
        var trigger = $('.cartbox_active'),
          container = $('.minicart__active');
        trigger.on('click', function (e) {
          e.preventDefault();
          container.toggleClass('is-visible');

        });
        trigger.on('click', function (e) {
          e.preventDefault();
          container.toggleClass('');

        });
        $('.micart__close').on('click', function () {
          container.removeClass('is-visible');
        });
    }
    cartToggler();

/*============= Setting Toggler ==============*/
/* My Account */
    function settingToggler() {
        var settingTrigger = $('.setting__active'),
          settingContainer = $('.setting__block');
        settingTrigger.on('click', function (e) {
          e.preventDefault();
          settingContainer.toggleClass('is-visible');
        });
        settingTrigger.on('click', function (e) {
          e.preventDefault();
          settingContainer.toggleClass('');
        });
    }
    settingToggler();


/*=============  Slider Activation  ==============*/
/* <!-- Start Slider Home area --> */
    $('.slide__activation').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        autoplay: true,
        autoplayTimeout: 10000,
        items:1,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
        0:{
          items:1
        },
        1920:{
          items:1
        }
        }
    });

/*====== Dropdown ======*/
    $('.dropdown').parent('.drop').css('position' , 'relative');

})(jQuery);