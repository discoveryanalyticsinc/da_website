 /* PLUS AND MINUS FOR ACCORDION
  * ================= */
(function() {
	var accordionHeader = jQuery('div.accordion').children('div.accordion-group').children('div.accordion-heading');

		accordionHeader.on('click', function() {
			var clickedAccodrionHeader = jQuery(this).children('a');

			if (clickedAccodrionHeader.hasClass('opened')) {
				clickedAccodrionHeader.removeClass('opened');
			} else 
			if (clickedAccodrionHeader.not('.opened')) {
				accordionHeader.children('a').removeClass('opened');
				clickedAccodrionHeader.addClass('opened');
			}
		});
})();

 /* CONTACT FORM
  * ================= */
jQuery(function(){
	jQuery("#contactForm").submit(function(){
		jQuery("#submitf").value='Please wait...';
		
		jQuery.post("js/contact.php?send=contact", jQuery("#contactForm").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					jQuery("#message_post").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
			} else {
				jQuery("#message_post").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				jQuery("#submitf").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

 /* NEWSLETTER FORM
  * ================= */
jQuery(function(){
	jQuery("#newsletterForm").submit(function(){
		jQuery("#submitf").value='Please wait...';
		
		jQuery.post("js/newsletter.php?send=newsletter", jQuery("#newsletterForm").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					jQuery("#message_post2").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
			} else {
				jQuery("#message_post2").html("<div class='successMessage'>Successfully singed to a newsletter!</div>"); 
				jQuery("#submitf").value='Send >>';
				}
		}, "json");
		
		return false;
		
	});
});

/* MOBILE MENU TOGGLE
* ================= */
jQuery(document).ready(function() {
	jQuery('.main-menu ul:first-child').clone().appendTo('.mobile-nav');
	var mobileNav = jQuery('.mobile-nav'),
		navHeight = mobileNav.height(),
		pageWrapper = jQuery('.main-page-wrapper');
		headerDir =jQuery('header.container');

	jQuery('#mobile-nav-button').click(function(event){
		event.preventDefault();

		// check and cahnge navigation state
		if(mobileNav.hasClass('off')) {
			headerDir.fadeOut().delay(800);
			mobileNav.removeClass('off').addClass('on').delay(200);
		} else {
			headerDir.fadeIn();
			mobileNav.removeClass('on').addClass('off');	
		}
		mobileNav.slideToggle();
	});


});

 /* CREATE EXISTS FUNCTION FO CHECKING IF CONTAINER EXISTS
  * ================= */
jQuery.fn.exists = function() {
	return this.length>0;
}

 /* GOOGLE MAP LOCATION FOR CONTACT PAGE ONLY IF MAP EXISTS
  * ================= */
if (jQuery("#map").exists()) {
    var map;
	map = new GMaps({
	    div: '#map',
	    lat: 40.714353,
	    lng: -74.005973,
	    zoom: 15,
		zoomControl: true,
		zoomControlOpt: {
			style : 'SMALL',
			position: 'TOP_LEFT'
		},
		streetViewControl: false,
	});

	map.addMarker({
	    lat: 40.714353,
	    lng: -74.005973,
	});
}

 /* GOOGLE ANALYTICS
  * ================= */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-25746425-3']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

 /* SLIDER INIT AND OPTIONS
  * ================= */
jQuery(document).ready(function(){
    var options = {
    	startingFrameID: 1,
        nextButton: true,
        prevButton: true,
        pagination: false,
        animateStartingFrameIn: true,
        transitionThreshold: true,
        autoPlay: true,
        autoPlayDelay: 5000,
        preloader: true,
        preloadTheseFrames: [1],
        preloadTheseImages: [
            "img/page-images/slider-image1.png",
            "img/page-images/slider-image2.png",
            "img/page-images/slider-image3.png"
        ]
    };
    
    if (jQuery("#sequence").exists()) {
    	var mySequence = jQuery("#sequence").sequence(options).data("sequence");
    }
});

/* SCROLL TO TOP
 * ====================================================== */
jQuery(document).ready(function(){
	function scrollToDiv(element,navheight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		jQuery('body,html').animate({
				scrollTop: totalScroll
		}, 500);
	}	
});

/* SHOW/HIDE BACK TO TOP BUTTON
 * ====================================================== */
jQuery(document).ready(function(){
	jQuery('.go-top').hide();
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 200) {
			jQuery('.go-top').fadeIn(300);
		} else {
			jQuery('.go-top').fadeOut(300);
		}
	});

	jQuery('.go-top').click(function(event){
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, 300);
	});
});

 /* RUN FITVIDS
  * ================= */
if (jQuery(".format-video").exists()) {
	jQuery(document).ready(function(){
		jQuery(".format-video").fitVids();
	});
}
