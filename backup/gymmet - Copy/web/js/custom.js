//Menu
jQuery.noConflict();

!function(n){n.fn.menumaker=function(s){var e=n(this),i=n.extend({title:"Menu",format:"dropdown",sticky:!1},s);return this.each(function(){return e.prepend('<div id="menu-button">'+i.title+"</div>"),n(this).find("#menu-button").on("click",function(){n(this).toggleClass("menu-opened");var s=n(this).next("ul");s.hasClass("open")?s.hide().removeClass("open"):(s.show().addClass("open"),"dropdown"===i.format&&s.find("ul").show())}),e.find("li ul").parent().addClass("has-sub"),multiTg=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){n(this).toggleClass("submenu-opened"),n(this).siblings("ul").hasClass("open")?n(this).siblings("ul").removeClass("open").hide():n(this).siblings("ul").addClass("open").show()}) },"multitoggle"===i.format?multiTg():e.addClass("dropdown"),i.sticky===!0&&e.css("position","fixed"),resizeFix=function(){n(window).width()>979&&e.find("ul").show(),n(window).width()<=979&&e.find("ul").hide().removeClass("open")},resizeFix(),n(window).on(resizeFix)})}}(jQuery),function(n){n(document).ready(function(){n(".mainMenu").menumaker({title:"Menu",format:"multitoggle"})})}(jQuery);
//Menu End
// Header Shrink
jQuery(function(){
 var shrinkHeader =100; jQuery(window).scroll(function() { var scroll = getCurrentScroll();   if ( scroll >= shrinkHeader ) {jQuery('header').addClass('head-shrink');}else {jQuery('header').removeClass('head-shrink');}});function getCurrentScroll() { return window.pageYOffset || document.documentElement.scrollTop;}
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
jQuery(document).ready(function() {
    function close_accordion_section() {
        jQuery('.accordion .accordion-section-title').removeClass('active');
        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    jQuery('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');
 
        if(jQuery(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    });
});
//According End

// Search Bar
jQuery(document).ready(function(){
    jQuery(".search_icon").click(function(){
        jQuery(".search_show").slideToggle( "1000" );
    });

    jQuery(".header.links").addClass("Drop_menu");


	document.getElementById('closeButton').addEventListener('click', function(e) {
    e.preventDefault();
    jQuery(".search_show").slideToggle( "1000" );
}, false);


// Search Bar End
if ( jQuery(window).width() > 980 ) {

// Social Icon
   jQuery('.socail_popup').hover( function(){
jQuery(this).toggleClass('socail_popup_show' );
       	
 });
   // Social Icon End
// Cart Bag
jQuery('.cart_bag').hover(function() {
    jQuery(this).toggleClass('gym-bag-popup-show');
});
    
 jQuery('.my_whishlist').hover(function() {
    jQuery(this).toggleClass('Drop_menu_show');
});
//Fillter Drop

jQuery('.drop-parent').hover(function() {
    jQuery(this).toggleClass('drop-parent-active');
});

// Sign Drop
jQuery('.Sign-Btn').hover(function() {
    jQuery(this).toggleClass('sign-drop-down-show');
});

// Small Doubt
jQuery('.small-doubt').hover(function() {
    jQuery(this).toggleClass('smalldoubtshow');
});


}else {
	
	// Social Icon
	 jQuery('.socail_popup').click(function(event) {
		   event.stopPropagation();
jQuery(this).toggleClass('socail_popup_show' );
       	
 });
   
    // Social Icon End
	
// Cart Bag
jQuery('.cart_bag').click(function(event) {
	event.stopPropagation();
jQuery(this).toggleClass('gym-bag-popup-show');
});
  
// Drop Down Menu
 jQuery('.my_whishlist').click(function(event) {
	 event.stopPropagation();
    jQuery(this).toggleClass('Drop_menu_show');
});
    
// Fillter-click	
jQuery('.drop-parent').click(function(event) {
    jQuery(this).toggleClass('drop-parent-active');
});
// Sign Drop
jQuery('.Sign-Btn').click(function(event) {
	event.stopPropagation();
    jQuery(this).toggleClass('sign-drop-down-show');
});
// Small Doubt
 jQuery('.small-doubt').click( function(event){
        event.stopPropagation();
   		jQuery(this).toggleClass('smalldoubtshow');
});   
//
jQuery(document).click( function(){
jQuery('.socail_popup').removeClass( "socail_popup_show" )
jQuery('.my_whishlist').removeClass( "Drop_menu_show" )
jQuery('.Sign-Btn').removeClass( "sign-drop-down-show" )
jQuery('.cart_bag').removeClass( "gym-bag-popup-show" )
 });
}
});

jQuery('.size-select').click( function(event){
        event.stopPropagation();
        jQuery('.drop-select').slideToggle( "1000" );
});

 jQuery('.Hide_sec').click( function(event){
        event.stopPropagation();
        jQuery('.Three_col').slideToggle( "1000" );
		jQuery(this).toggleClass('Hide_sec_show');
}); 

 jQuery('.Hide_sec2').click( function(event){
        event.stopPropagation();
        jQuery('.Five_col').slideToggle( "1000" );
		jQuery(this).toggleClass('Hide_sec_show');
}); 

  jQuery('.Termclose').click( function(event){
        event.stopPropagation();
        jQuery('.mfp-wrap').hide();
		 jQuery('.mfp-bg').hide();
		
		}); 
jQuery('.accountparent').click( function(event){
        event.stopPropagation();
        jQuery('.accountchild').slideToggle( "1000" );
    });
// Custom Select
 jQuery('.cus-select').click( function(event){
        event.stopPropagation();
   		jQuery(this).toggleClass('cus-select-show');
});  
// For Overflow menu
jQuery(document).ready(function(){function setHeight(){windowHeight=jQuery(window).innerHeight();jQuery('.mainMenu ul').css('max-height',windowHeight-80);};setHeight();jQuery(window).resize(function(){setHeight();});});
// For Overflow menu End

//For Equal Height Banner 
function processAutoheight()
{ 
var maxHeight = 0;
jQuery(".Image-fixed > *").each(function(){
	   height = jQuery(this).outerHeight(true); 
        if (height > maxHeight ) {
            maxHeight = height;
        }
    });
    jQuery(".Inner-Banner").height(maxHeight);
////Home Banner ///
var maxHeight = 0;
jQuery(".Image-fixed > *").each(function(){
	   height = jQuery(this).outerHeight(true); 
        if (height > maxHeight ) {
            maxHeight = height;
        }
    });
    jQuery("ul.slides li").height(maxHeight);
	
///Video Banner///
	var maxHeight = 0;
jQuery(".Video-Banner .Image-fixed .video-parent > * ").each(function(){
	   height = jQuery(this).outerHeight(true); 
        if (height > maxHeight ) {
            maxHeight = height;
        }
    });
    jQuery(".Video-Banner li").height(maxHeight);	
	
}
jQuery(document).ready(function() {
    jQuery(window).resize(function() { processAutoheight(); });
    jQuery(document).resize(function() { processAutoheight(); });
    processAutoheight();
});

jQuery(".social_icon ul li a").on("click", function(){  
     var addressValue = jQuery(this).attr("href");
     option = addressValue.match(/option=(.*)/)[1]; 
    jQuery.each( [ "contactus" ,"shipping", "payment", "returns", "product"], function( i, l ){
        jQuery('#' +l).removeClass('active');
        jQuery('#' +l).removeClass('diactive');     
        jQuery('#' +l + '1 a').removeClass('selected'); 
        jQuery('#' +l + '1').removeClass('selected');
        jQuery('#' +l).hide();       
    });  
      jQuery('#' +option).addClass('active');
      jQuery('#' + option + '1 a').addClass('selected');
    }); 
    jQuery(".faq-nav-wrapper ul li a").on("click", function(){  
    option1 = jQuery(this).attr('href');     
    jQuery.each( ["shipping", "returns", "payment",  "contactus", "product"], function( i, l ){
        jQuery('#' +l).removeClass('active');
        jQuery('#' +l).removeClass('diactive');     
        jQuery('#' +l + '1 a').removeClass('selected'); 
        jQuery('#' +l + '1').removeClass('selected');
        jQuery('#' +l).hide();            
    });  
      jQuery(option1).addClass('active');
      jQuery(option1 + '1 a').addClass('selected');
    });
    
    jQuery(window).load(function(){
        if (!jQuery('body').hasClass("cms-index-index")) {
            jQuery(".magestore-bannerslider").remove();
        }
    });


    jQuery(document).ready(function(){   
        //jQuery(".account").find(".nav.items").appendTo(jQuery(".Inner-Banner.Margin-top")).wrap('<div class="myaccount_nav_warrper"></div>');
        jQuery(".img-container").find('img').removeClass("photo").removeClass("image");   
        jQuery(".catalog-category-view .product-items .row").each(function(i){
            var j = i+1;
            console.log("j==="+j);
            if(j%2==0){
                var ids = jQuery(this).attr('id');
                if(ids!=="row_0"){
                    jQuery(this).find('.col-md-5').insertBefore("#"+ids+" .col-md-7");
                    //var bigHtml = jQuery(this).find('.col-md-5').html();
                    //var smallHtml = jQuery(this).find('.col-md-7').html();

                    //jQuery("#"+ids+" .col-md-5").html(smallHtml);
                    //jQuery("#"+ids+" .col-md-7").html(bigHtml);
                }
            }
        });

        jQuery(".category-view .Image-fixed").html(jQuery(".category-view .category-image").html());
        //jQuery(".category-view .category-image").remove();

        
        jQuery(jQuery(".vertical-box")).insertBefore( ".category-banner .Banner-logo" );
        jQuery(".catalog-category-view").find(".Banner-logo").insertBefore("#contentarea");
        jQuery(".category-banner .Inner-Banner.Margin-top, .category-banner .Banner-logo").remove();
        //jQuery(".catalog-category-view .Inner-Banner,.catalog-category-view .Banner-logo").remove();

        option = window.location.href.split("option=")[1];          
        jQuery.each( [ "contactus" ,"shipping", "payment", "returns", "product"], function( i, l ){         
            jQuery('#' +l).removeClass('active');
            jQuery('#' +l).removeClass('diactive');
            jQuery('#' +l + '1').removeClass('selected');           
            jQuery('#' +l + '1 a').removeClass('selected'); 
            jQuery('#' +l).addClass('diactive');      
        });  
      jQuery('#' +option).addClass('active');   
      jQuery('#' + option + '1 a').addClass('selected');    
        
      jQuery( ".journel_box .photo iframe" ).wrap( "<div class='iframe-video'></div>" );    
        
        jQuery(".bounce").click(function(e){
            e.preventDefault();
            jQuery('html, body').animate({
                scrollTop: (jQuery('#home_grid').offset().top)-85
            },800);
        });

    })
//For Equal Height Banner End 

function popWin(url,win,para) {
    var win = window.open(url,win,para);
    win.focus();
}

function setLocation(url){
    window.location.href = url;
}

function setPLocation(url, setFocus){
    if( setFocus ) {
        window.opener.focus();
    }
    window.opener.location.href = url;
}