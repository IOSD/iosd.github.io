/*
* Theme Name: Ultra
* Version: 1.0.0
*/

/* Table of Content
================================================== 

    01. Sticky Header
	02. Main Menu
	03. Revolution slider
    04. Owl carousel
	05. Fancybox    
	06. Portfolio Section
    07. Tabs
    08. Data Rel
    09. Tooltip
	10. Fact Counter
	11. Progress Bar
	12. Flick Feeds
	13. Form Validation
    14. Preloader
	15. Pie chart
    16. Right Sidebar Panel

*/

/* 01 Sticky Header
================================================== */
$(document).ready(function () {
"use strict";
        
        $(window).trigger("resize");
            
        
        initWorkFilter();
    

    var menu = $('.header-nav'),
        pos = menu.offset();

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('set') && $(this).scrollTop() > 100) {
            menu.fadeOut('fast', function () {
                $(this).removeClass('set').addClass('sticky').fadeIn('fast');
            });
        } else if ($(this).scrollTop()<=pos.top + 100 && menu.hasClass('sticky')) {
            menu.fadeOut(0, function () {
                $(this).removeClass('sticky').addClass('set').fadeIn(0);
            });
        }
    });

});

	
/* 02 Main Menu
================================================== */
$(document).ready(function () {
"use strict";
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();


    $('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });

});
/* 03 Revolution Slider
================================================== */
jQuery(document).ready(function() {
"use strict";
	   jQuery('.banner').revolution(
		{
			delay:9000,
			startwidth:1170,
			startheight:650,
			hideThumbs:10
		});
	   jQuery('.banner-full').revolution(
		{
			delay:9000,
			startwidth:1170,
			startheight:930,
			hideThumbs:10
		});
				
		jQuery('.fullwidthbanner').revolution(
		{
			delay: 9000,
			startwidth: 1170,
			hideThumbs: 100,
			fullWidth: "on"
		});
});
/* 04 Owl Carousel
================================================== */
$(document).ready(function () {
"use strict";    
     $(".owlcarousel").owlCarousel({
        navigation: true,
        navigationText : ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
        pagination: false,
        rewindNav: false,
        items: 3,
        mouseDrag: true,
        itemsDesktop: [1200, 3],
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [970, 2],
        itemsMobile: [767, 1]
    });

	 $(".owlcarousel-full").owlCarousel({
        navigation: true,
        navigationText : ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
        pagination: true,
        rewindNav: true,
        items: 4,
        mouseDrag: true,
		autoPlay: 4000,
        itemsDesktop: [1200, 4],
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [970, 2],
        itemsMobile: [767, 1]
    });
	 
	 $(".owlcarousel-full2").owlCarousel({
        navigation: true,
        navigationText : ['<i class="icon-left-open"></i>','<i class="icon-right-open"></i>'],
        pagination: false,
        rewindNav: false,
        items: 6,
        mouseDrag: true,
        itemsDesktop: [1200, 6],
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [970, 2],
        itemsMobile: [767, 1]
    });
	 
	 $(".owl-testimonials").owlCarousel({
		rewindNav: true,
        items: 1,
        itemsDesktop: [1200, 1],
        itemsDesktopSmall: [1024, 1],
        itemsTablet: [768, 1],
        itemsMobile: [480, 1],
        navigation: false,
        pagination: true,
		autoPlay: 4000

    });

    $(".owl-clients").owlCarousel({

        autoPlay: 9000,
		rewindNav: true,
        items: 6,
        itemsDesktop: [1200, 6],
        itemsDesktopSmall: [1024, 5],
        itemsTablet: [768, 3],
        itemsMobile: [480, 2],
        navigation: false,
        pagination: false,

    });
    
    var owl = $(".owl-portfolio-slider");

    owl.owlCarousel({
        navigation: false,
        autoHeight: true,
        slideSpeed: 300,
        paginationSpeed: 300,
        singleItem: true,
		autoPlay: 4000,
		pagination: false,
    });

    // Custom Navigation Events
    $(".slider-next").click(function () {
        owl.trigger('owl.next');
    })
    $(".slider-prev").click(function () {
        owl.trigger('owl.prev');
    })
    

});

/* 05 Fancy Box
================================================== */
$(document).ready(function () {
"use strict";
    $(".fancybox").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function () {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
});

/* 05 Portfolio
================================================== */
$(document).ready(function () {
"use strict";
        $(window).trigger("resize");        
        initWorkFilter();
});

// Projects filtering
var fselector = 0;
var work_grid = $("#project-grid");

function initWorkFilter(){
    (function($){
     "use strict";
     var isotope_mode;
     if (work_grid.hasClass("masonry")){
         isotope_mode = "masonry";
     } else{
         isotope_mode = "fitRows"
     }
     
     work_grid.imagesLoaded(function(){
            work_grid.isotope({
                itemSelector: '.mix',
                layoutMode: isotope_mode,
                filter: fselector
            });
        });
        
        $(".filter").click(function(){
            $(".filter").removeClass("active");
            $(this).addClass("active");
            fselector = $(this).attr('data-filter');
            
            work_grid.isotope({
                itemSelector: '.mix',
                layoutMode: isotope_mode,
                filter: fselector
            });
            return false;
        });
        
    })(jQuery);
}

/* ---------------------------------------------
 Masonry
 --------------------------------------------- */

function init_masonry(){
    (function($){    
    
        $(".masonry").imagesLoaded(function(){
            $(".masonry").masonry();
        });
        
    })(jQuery);
}
 
/* 06 Parallax Mobiles
================================================== */
$(document).ready(function () {
"use strict";
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
});

/* 07 Tabs
================================================== */
$(document).ready(function () {
"use strict";
    $('.tabs.services').easytabs({
        animationSpeed: 300,
        updateHash: false,
        cycle: 5000
    });
});
$(document).ready(function () {
"use strict";
    $('.tabs.tabs-top, .tabs.tabs-side').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
});
/* 08 Data Rel
================================================== */
$('a[data-rel]').each(function () {
"use strict";
    $(this).attr('rel', $(this).data('rel'));
});
/* 09 Tooltip
================================================== */
$(document).ready(function () {
"use strict";
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
});



		$('.hideme').bind('inview', function (event, visible) {
			if (visible === true) {
				var offset = $(this).offset();
				$(this).removeClass('hideme');
			}
		});
		$('.p-image-02').bind('inview', function (event, visible) {
			if (visible === true) {
				$('.dontHide').removeClass('hideme-slide');
			}
		});

		$('.newtr').bind('inview', function (event, visible) {
			if (visible === true) {
				$('.dontHide').removeClass('hideme-slide2');
			}
		});

/* 10 Fact Counter
================================================== */
		
	 $(document).ready(function () {
"use strict";	
	/* Counter */
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;
			
        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        })
    };
	

		var count=0;
		var dataperc;
		
		//mobile counter
		if($(window).width()>479){		
			$('.milestone-counter').bind('inview', function (event, visible) {
				if (visible === true & count===0) {
				// element is now visible in the viewport
				count++;
				$('.milestone-counter').each(function(){
					dataperc = $(this).attr('data-perc'),
					$(this).find('.milestone-count').delay(6000).countTo({
					from: 0,
					to: dataperc,
					speed: 2500,
					refreshInterval: 80
					});
				});
				} else {
				// element has gone out of viewport
				}
			});
		}else{
			$('.milestone-count.highlight').each(function(){
				$(this).html($(this).parent().attr('data-perc'))
			})
		}
		
	});
 
 
/* 11 Progress Bar
================================================== */
jQuery(document).ready(function() {
initProgress('.progress');

function initProgress(el){
	jQuery(el).each(function(){
		var pData = jQuery(this).data('progress');
		progress(pData,jQuery(this));
	});
}


			
function progress(percent, $element) {
	var progressBarWidth = 0;
	
	(function myLoop (i,max) {
		progressBarWidth = i * $element.width() / 100;
		setTimeout(function () {   
		$element.find('div').find('small').html(i+'%');
		$element.find('div').width(progressBarWidth);
		if(++i<=max) myLoop(i,max);     
		}, 10)
	})(0,percent);  
}	

});


/* 12 Flick Feeds
================================================== */
jQuery(document).ready(function() {
 $('.photo-stream, .grayscale').flickrfeed('52617155@N08','', {
        limit: 8,
        title: false,
        date: false
    });
});

jQuery(document).ready(function() {
$('.section-with-sidebar > .container > .row').imagesLoaded(function(){
		var sidebar = $(this).find(' > .sidebar') ,
		    content = $(this).find(' > .content') ,
			height = 0;
		if( content.outerHeight() > height ){ height = content.outerHeight() }	
		if( sidebar.outerHeight() > height ){ height = sidebar.outerHeight() }	
		sidebar.css("height",height+"px");
		content.css("height",height+"px");	
	
});	
});
/* 13 Form Validation
================================================== */

/* 14 Preloader
================================================== */
		$(window).load(function() { // makes sure the whole site is loaded
		"use strict";
			$('.spinner').fadeOut(); // will first fade out the loading animation
			$('.loader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
		})


$(document).ready(function(){
						   
	var ut_word_rotator = function() {
                
			var ut_rotator_words = [
				'Flexible Multipurpose HTML Template',				
				'No Coding Knowledge Required',
				'Professional Development Team'
			] ,
			counter = 0;                
			
			setInterval(function() {
			$(".parallex-slider-title, .parallex-slider-title-black, .parallex-slider-title-slider").fadeOut(function(){
					$(this).html(ut_rotator_words[counter=(counter+1)%ut_rotator_words.length]).fadeIn();
				});
			}, 3000 );
		}
		
		ut_word_rotator();
});
/* 15 Pie chart
================================================== */		
$('.percentage-light').easyPieChart({
            barColor: function(percent) {
                percent /= 100;
                return "rgb(50, 150, 220)";
            },
            trackColor: 'rgba(245, 245, 245, 1)',
            scaleColor: false,
            lineCap: 'butt',
            rotate: 0,
            lineWidth: 5,
            animate: 3000,
            onStep: function(value) {
                this.$el.find('span').text(~~value);
            }
        });

        $('.updateEasyPieChart').on('click', function(e) {
          e.preventDefault();
          $('.percentage, .percentage-light').each(function() {
            $(this).data('easyPieChart').update(Math.round(100*Math.random()));
          });
        });
		
		
		$('.plan').mouseenter(function() {
			$(this).closest('.pricing').find('.plan').removeClass('active');
			$(this).addClass('active');
		});




	