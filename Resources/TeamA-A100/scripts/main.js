$(function() { // on document ready

    var offset = -20; //Offset of 20px
    var video_width = 0;

	$(window).on("resize", function(){
		if (window.innerWidth > 440) {
			$(".hidden-nav").css("display", "none"); // hide the mobile nav bar on big screens
		}

        video_width = $(".section-inner").width();
        console.log(video_width);
        $("#aboutus iframe").css({"height":0.56*video_width});
	});

    $(".hidden-apply").click(function() {
    	$(".hidden-nav").slideToggle(300);
    });

    $(".nav a").click(function() {
    	if ($(this).hasClass("apply-btn") == false) {
    		$(".nav a").removeClass("active-link");
    		$(this).addClass("active-link");
    	}
    });

    $(".next-section").click(function() { 
        $('html, body').animate({
            scrollTop: $("#program").offset().top + offset
        }, 1000);
    });


    // change the content of the page based on which link the user clicked on. We have 3 mains links
    // program_link, partners_link, and aboutus_link
    // the following conditional function take the user to the clicked link and hides the rest
    $(".nav .goto").click(function() {    
        var mobile = 0;
        if (window.innerWidth <= 440) {
            mobile = 129; 
        }

        if ($(".hidden-apply").is(":visible")) {
            $(".hidden-nav").slideToggle(300);
            offset = offset - $(".hidden-nav").height();
        };

        if ($(this).hasClass("program_link")) {
            $("#program").show();
            $("#advert").html("A100 is a free eight-week web development and job placement program. Interested?");
            $(".application-link a").html("Apply Now").attr({"href":"Application2.html"});
            $("#top-banner .main-msg").show();
            $('html, body').animate({
                scrollTop: $("#advert").offset().top - 20 - mobile
            }, 100, "linear", function() {
                $("#partners").hide();
                $("#aboutus").hide();
            });
        } else if ($(this).hasClass("partners_link")) {
            $("#partners").show();
            $("#advert").html("Are you looking for access to one of the best pools of new developer talent in CT?");
            $(".application-link a").html("Contact Us").attr({"href":"mailto:krishna@indie-soft.com?subject=A100 Program"});
            $("#top-banner .main-msg").hide();
            $('html, body').animate({
                scrollTop: $("#advert").offset().top - 20 - mobile
            }, 100, "linear", function() {
                $("#program").hide();
                $("#aboutus").hide();
            });
        } else if ($(this).hasClass("aboutus_link")) {
            $("#aboutus").show();
            $("#advert").html("Want to learn more about us?");
            $(".application-link a").html("Contact Us").attr({"href":"mailto:krishna@indie-soft.com?subject=A100 Program"});
            $("#top-banner .main-msg").hide();
            $('html, body').animate({
                scrollTop: $("#advert").offset().top - 20 - mobile
            }, 100, "linear", function() {
                $("#program").hide();
                $("#partners").hide();
            });
        }

    });

    $(window).scroll(function() {
        var off = $(document).scrollTop();
        if (off > 10) {
            $(".main-nav ul").addClass("no_padding")
        } else {
            $(".main-nav ul").removeClass("no_padding")
        }
    });

    carousel();

    // resize the video to fit the screen
    video_width = $(".section-inner").width();
    console.log(video_width);
    $("#aboutus iframe").css({"height":0.56*video_width});

});