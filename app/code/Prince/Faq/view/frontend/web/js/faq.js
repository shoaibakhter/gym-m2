require ([
    "jquery", 
    "jquery/ui"
], function($){
    $(".faq-accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: '',
        animate: 500
    });

    var hashval = window.location.hash;
    var hasArr = hashval.split("=");
    var opt = hasArr[1];

    $('.tabs li a').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $(".faq-content .accordian_hide").hide();
            $(target).show();
        }
    }); 
    
    $(".tabs").find('li').eq(0).find('a').trigger('click');
    $(".group-link").removeClass('selected');
    if(opt!="" || opt!=" " || opt!="undefined"){
        $("#faq_"+opt).trigger('click');
        $("#faq_"+opt).addClass('selected');
    }

    $(window).bind('hashchange', function() {
        var hashval = window.location.hash;
        var hasArr = hashval.split("=");
        var opt = hasArr[1];
        $("#faq_"+opt).trigger('click');
        $("#faq_"+opt).addClass('selected');
    });

});