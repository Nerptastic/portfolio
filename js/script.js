(function($) {
  "use strict";
  var cfg = {
      scrollDuration : 800, // smoothscroll duration
  },
  $WIN = $(window);
  // Add the User Agent to the <html>
  // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
  var doc = document.documentElement;
  doc.setAttribute('data-useragent', navigator.userAgent);

  var preLoader = function() {
    $("html").addClass('preload');
    $WIN.on('load', function() {
        //force page scroll position to top at page refresh
        $('html, body').animate({ scrollTop: 0 }, 'normal');
        // will first fade out the loading animation 
        $("#loader").fadeOut("slow", function() {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        }); 
        $("html").removeClass('preload');
        $("html").addClass('loaded');
    });

    var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Enter your name",
					email: "Enter email address",
					message: "Enter a message"
				},
				/* submit via ajax */
				submitHandler: function(form) {		
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({   	
				      type: "POST",
				      url: "php/send-email.php",
				      data: $(form).serialize(),

				      beforeSend: function() { 
				      	$submit.css('display', 'block').text(waitText);
				      },
				      success: function(msg) {
		               if (msg == 'OK') {
		               	$('#form-message-warning').hide();
				            setTimeout(function(){
		               		$('#contactForm').fadeOut();
		               	}, 1000);
				            setTimeout(function(){
				               $('#form-message-success').fadeIn();   
		               	}, 1400);
			               
			            } else {
			               $('#form-message-warning').html(msg);
				            $('#form-message-warning').fadeIn();
				            $submit.css('display', 'none');
			            }
				      },
				      error: function() {
				      	$('#form-message-warning').html("Something went wrong. Please try again.");
				         $('#form-message-warning').fadeIn();
				         $submit.css('display', 'none');
				      }
			      });    		
		  		}
				
			} );
		}
	};
	contactForm();
};

// Sticky Menu
var stickyMenu = function() {  
    var hdr = $('.header'),
        hdrTop = $('.header').offset().top;

    $WIN.on('scroll', function() {

        if ($WIN.scrollTop() > hdrTop) {
            hdr.addClass('sticky');
        }
        else {
            hdr.removeClass('sticky');
        }

    });
};

// Mobile Menu 
var mobileMenu = function() {
    var toggleButton = $('.header-menu-toggle'),
        nav = $('.header-nav-wrap');
    toggleButton.on('click', function(event){
        event.preventDefault();
        toggleButton.toggleClass('is-clicked');
        nav.slideToggle();
    });
    if (toggleButton.is(':visible')) nav.addClass('mobile');
    $WIN.on('resize', function() {
        if (toggleButton.is(':visible')) nav.addClass('mobile');
        else nav.removeClass('mobile');
    });
    nav.find('a').on("click", function() {
        if (nav.hasClass('mobile')) {
            toggleButton.toggleClass('is-clicked');
            nav.slideToggle(); 
        }
    });
};

    // Highlight Menu Items
var lastId,
    topMenu = $("#main-nav"),
    topMenuHeight = topMenu.outerHeight()+250,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    menuItems.click(function(e){
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+100;
    $('html, body').stop().animate({ 
      scrollTop: offsetTop
    }, 300);
    e.preventDefault();
    });
    $(window).scroll(function(){
    var fromTop = $(this).scrollTop()+topMenuHeight;
    var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
    }                   
    });

  // Input
  $(".input-contact input, .textarea-contact textarea").focus(function () {
      $(this).next("span").addClass("active");
  });
  $(".input-contact input, .textarea-contact textarea").blur(function () {
      if ($(this).val() === "") {
          $(this).next("span").removeClass("active");
      }
  });


//   Spotlight hide when user clicks outside of image
// remove .show and .menu when user clicks outside of a div
// Get element by id "spotlight",
// Check for clicks outside of a certain box
// On Click - 
// remove class "show" and "menu"



   // Initialize
   (function clInit() {
    preLoader();
    stickyMenu();
    mobileMenu();
})();

})(jQuery);