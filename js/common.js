$(document).ready(function() {
	$("header .cont").css("min-height", $(window).height() - 10);
  $(".nav-link").mPageScroll2id({
    //offset: $("header").height()
  });
  $("#go-to-top").goTop({
    appear: 200,
    scrolltime: 800,
    src: "fa fa-arrow-circle-up",
    width: 45,
    place: "right",
    fadein: 500,
    fadeout: 500,
    opacity: 0.5,
    marginX: 2,
    marginY: 2
  });
  //$("").animated("fadeInLeft", "fadeOutLeft");
  $(".owl-carousel").owlCarousel({
    margin: 5,
    dots: false,
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    autoWidth: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 5
      }
    }
  });
  //Fixed menu
  $(document).scroll (function(){
    if ($(document).width() >= 768){
      if ($(document).scrollTop() > $(window).height() - 400)  
        $("nav.desk").addClass("fixed");
      else
        $("nav.desk").removeClass("fixed");
    }
  });
  //Mobile menu
  $(".mobile").hide();
  $("#burg").on("click", function(){
    $(".mobile").slideToggle();
  });
  $(".mobile .nav-link").on("click", function(){
    $(".mobile").slideToggle();
  });
  $(document).mouseup(function(e){
    if (!$(".mobile").is(e.target) && $(".mobile").has(e.target).length === 0){
      $(".mobile").fadeOut();
    }
  });
  //Pop-up
  $(".popup-link").magnificPopup({
    /*preloader: true,
    callbacks: {
      open: function(){
        $(".block").method();
      }
    }*/
  });
  //Counter
  var clock;
  clock = $(".clock").FlipClock({
    clockFace: "DailyCounter",
    autoStart: false,
    callbacks: {
      stop: function() {
        $(".message").html("Прием заявок окончен.");
      }
    }
  });
  var dt = "May 02 2020 00:00:00";
  var first = new Date(dt);
  var last = Date.now();
  var rem = first - last;
  rem /=1000;
  clock.setTime(rem);
  clock.setCountdown(true);
  clock.start();
  //Mail
  $("form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      alert("Спасибо!");
      setTimeout(function() {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});