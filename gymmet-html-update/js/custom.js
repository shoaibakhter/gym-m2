//Menu
!function(n){n.fn.menumaker=function(s){var e=n(this),i=n.extend({title:"Menu",format:"dropdown",sticky:!1},s);return this.each(function(){return e.prepend('<div id="menu-button">'+i.title+"</div>"),n(this).find("#menu-button").on("click",function(){n(this).toggleClass("menu-opened");var s=n(this).next("ul");s.hasClass("open")?s.hide().removeClass("open"):(s.show().addClass("open"),"dropdown"===i.format&&s.find("ul").show())}),e.find("li ul").parent().addClass("has-sub"),multiTg=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){n(this).toggleClass("submenu-opened"),n(this).siblings("ul").hasClass("open")?n(this).siblings("ul").removeClass("open").hide():n(this).siblings("ul").addClass("open").show()}) },"multitoggle"===i.format?multiTg():e.addClass("dropdown"),i.sticky===!0&&e.css("position","fixed"),resizeFix=function(){n(window).width()>979&&e.find("ul").show(),n(window).width()<=979&&e.find("ul").hide().removeClass("open")},resizeFix(),n(window).on(resizeFix)})}}(jQuery),function(n){n(document).ready(function(){n(".mainMenu").menumaker({title:"Menu",format:"multitoggle"})})}(jQuery);
//Menu End
// Header Shrink
$(function(){
 var shrinkHeader =100; $(window).scroll(function() { var scroll = getCurrentScroll();   if ( scroll >= shrinkHeader ) {$('header').addClass('head-shrink');}else {$('header').removeClass('head-shrink');}});function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop;}
});
// Header Shrink End
// Scroll Js
jQuery(document).ready(function() {
				var offset = 400;
				var duration = 500;
				jQuery(window).scroll(function() {
					if (jQuery(this).scrollTop() > offset) {
						jQuery('.scrollup').fadeIn(1000);
					} else {
						jQuery('.scrollup').fadeOut(1000);
					}
				});
				
				jQuery('.scrollup').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
			});
// Scroll Js End
//For box labeling set max height auto
   	  jQuery(window).bind("load", function(){              
 var biggestHeight = 0;  
    //check each of them  
    jQuery('.Account-Option .option-item').each(function(){  
        //if the height of the current element is  
        //bigger then the current biggestHeight value  
        if(jQuery(this).height() > biggestHeight){  
            //update the biggestHeight with the  
            //height of the current elements  
            biggestHeight = jQuery(this).height();  
        }  
    });  
   //height to all the elements  
    jQuery('.Account-Option .option-item').height(biggestHeight);
});	
//For box labeling set max height auto end

// According
$(document).ready(function() {
    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});
//According End

// Search Bar
$(document).ready(function(){
    $(".search_icon").click(function(){
        $(".search_show").slideToggle( "1000" );
    });
	document.getElementById('closeButton').addEventListener('click', function(e) {
    e.preventDefault();
    $(".search_show").slideToggle( "1000" );
}, false);
});

// Search Bar End
$(document).ready(function() {
if ( $(window).width() > 980 ) {

// Social Icon
   $('.socail_popup').hover( function(){
$(this).toggleClass('socail_popup_show' );
       	
 });
   // Social Icon End
// Cart Bag
$('.cart_bag').hover(function() {
    $(this).toggleClass('gym-bag-popup-show');
});
    
 $('.my_whishlist').hover(function() {
    $(this).toggleClass('Drop_menu_show');
});
//Fillter Drop

$('.drop-parent').hover(function() {
    $(this).toggleClass('drop-parent-active');
});

// Sign Drop
$('.Sign-Btn').hover(function() {
    $(this).toggleClass('sign-drop-down-show');
});

// Small Doubt
$('.small-doubt').hover(function() {
    $(this).toggleClass('smalldoubtshow');
});


}
  

else {
	
	// Social Icon
	 $('.socail_popup').click(function(event) {
		   event.stopPropagation();
$(this).toggleClass('socail_popup_show' );
       	
 });
   
    // Social Icon End
	
// Cart Bag
$('.cart_bag').click(function(event) {
	event.stopPropagation();
$(this).toggleClass('gym-bag-popup-show');
});
  
// Drop Down Menu
 $('.my_whishlist').click(function(event) {
	 event.stopPropagation();
    $(this).toggleClass('Drop_menu_show');
});
    
// Fillter-click	
$('.drop-parent').click(function(event) {
    $(this).toggleClass('drop-parent-active');
});
// Sign Drop
$('.Sign-Btn').click(function(event) {
	event.stopPropagation();
    $(this).toggleClass('sign-drop-down-show');
});
// Small Doubt
 $('.small-doubt').click( function(event){
        event.stopPropagation();
   		$(this).toggleClass('smalldoubtshow');
});   
//
$(document).click( function(){
$('.socail_popup').removeClass( "socail_popup_show" )
$('.my_whishlist').removeClass( "Drop_menu_show" )
$('.Sign-Btn').removeClass( "sign-drop-down-show" )
$('.cart_bag').removeClass( "gym-bag-popup-show" )
 });
}
});

$('.size-select').click( function(event){
        event.stopPropagation();
        $('.drop-select').slideToggle( "1000" );
});

 $('.Hide_sec').click( function(event){
        event.stopPropagation();
        $('.Three_col').slideToggle( "1000" );
		$(this).toggleClass('Hide_sec_show');
}); 

 $('.Hide_sec2').click( function(event){
        event.stopPropagation();
        $('.Five_col').slideToggle( "1000" );
		$(this).toggleClass('Hide_sec_show');
}); 

  $('.Termclose').click( function(event){
        event.stopPropagation();
        $('.mfp-wrap').hide();
		 $('.mfp-bg').hide();
		
		}); 
$('.accountparent').click( function(event){
        event.stopPropagation();
        $('.accountchild').slideToggle( "1000" );
    });
// Custom Select
 $('.cus-select').click( function(event){
        event.stopPropagation();
   		$(this).toggleClass('cus-select-show');
});  
// For Overflow menu
$(document).ready(function(){function setHeight(){windowHeight=$(window).innerHeight();$('.mainMenu ul').css('max-height',windowHeight-80);};setHeight();$(window).resize(function(){setHeight();});});
// For Overflow menu End

//For Equal Height Banner 
function processAutoheight()
{ 
var maxHeight = 0;
$(".Image-fixed > *").each(function(){
	   height = $(this).outerHeight(true); 
        if (height > maxHeight ) {
            maxHeight = height;
        }
    });
    $(".Inner-Banner").height(maxHeight);
////Home Banner ///
var maxHeight = 0;
$(".Image-fixed > *").each(function(){
	   height = $(this).outerHeight(true); 
        if (height > maxHeight ) {
            maxHeight = height;
        }
    });
    $("ul.slides li").height(maxHeight);
	
///Video Banner///
	var maxHeight = 0;
$(".Video-Banner .Image-fixed .video-parent > * ").each(function(){
	   height = $(this).outerHeight(true); 
        if (height > maxHeight ) {
            maxHeight = height;
        }
    });
    $(".Video-Banner li").height(maxHeight);	
	
}
$(document).ready(function() {
    $(window).resize(function() { processAutoheight(); });
    $(document).resize(function() { processAutoheight(); });
    processAutoheight();
});

//For Equal Height Banner End 

