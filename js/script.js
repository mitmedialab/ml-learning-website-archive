// clicktoggle function for touch-device viewing (no hover)
$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function() {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};

// check for for touch-device to decide if clicktoggle or hover for project gallery
if(!!('ontouchstart' in window)){
	$('.project-container').clicktoggle(function(){ 
        $(this).css('background-color','#000'); 
        $(this).find('.project-content').fadeTo('fast',1);
        $(this).find('.project-image').fadeTo('fast',0.3);
    },    
    function(){
       	$(this).find('.project-content').fadeTo('fast',0);
        $(this).find('.project-image').fadeTo('fast',1);
	});
}
else{
	$('.project-container').hover(function(){  
        $(this).css('background-color','#000');
        $(this).find('.project-content').fadeTo('fast',1);
        $(this).find('.project-image').fadeTo('fast',0.3);
    },    
    function(){
       	$(this).find('.project-content').fadeTo('fast',0);
        $(this).find('.project-image').fadeTo('fast',1);
	});
}

 // scroll logic to correctly toggle nav-bar active page between 'home' and 'about'   
$(window).scroll(function () {

    if ($(window).scrollTop() + $(window).height() > $('.about-content').offset().top + $('.about-content').height()) {
        $('#nav-home').removeClass('active');
        $('#nav-about').addClass('active');
    } else {
        $('#nav-home').addClass('active');
        $('#nav-about').removeClass('active');
    }
});

// to fix bootstrap's non-collapsing collapsed nav-bar when in-page link is clicked
$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') || $(e.target).is('button')) {
        $(this).collapse('hide');
    }
});

