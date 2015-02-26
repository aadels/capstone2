  $(document).ready(function($) {

  var isTouch = 'ontouchstart' in document.documentElement;

  //window height & width
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.fullwidth').css('width', wwidth);
  $('.50height').css('height', wheight * .50);
  $('.panelpic').css('width', wwidth * .25);

  $(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.75height').css('height', wheight * .75);
  $('.panelpic').css('width', wwidth * .25);
 


  }) //on resize


// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

  // init controller for for Fluff and Building Tweens
    var controller2 = new ScrollMagic({
      globalSceneOptions: {
        triggerHook: "onLeave"
      }
    });
    
 //fluff tweens
  var flufftween = TweenMax.staggerFromTo('#community .smpic', 5, 
    { 
      right: 20 + "%" ,
      bottom: -120 + "%" 

    }, 
    {
      right: 40 + "%",
      bottom: 40 + "%",
      delay: 7, 
      ease: Cubic.easeOut
    });

    var flufftween2 = TweenMax.staggerFromTo('#community .smpic', 5, 
    { 
      right: 40 + "%",
      bottom: 40 + "%",

    }, 
    {
      right: 60 + "%",
      bottom: 150 + "%",
      delay: 15, 
      ease: Cubic.easeOut
    });

  var fluffdancertween = TweenMax.staggerFromTo('#community .lgpic2', 3, 
    { 
      bottom: -150 + "%" 
    }, 
    {
      bottom: -5 + "%" ,
      ease: Cubic.easeOut
    });

  ////Create scenes, set pins, trigger when images are visible, and add to controller
  var scene1 = new ScrollScene({triggerElement: "#community", duration: 14000})
    .setPin("#community")
    .addTo(controller2);

  var scene1a = new ScrollScene({triggerElement: '#community', duration: 1600}) 
    .setTween(flufftween)
    .addTo(controller2);

  var scene1b = new ScrollScene({triggerElement: '#community', duration: 4000}) 
    .setTween(flufftween2)
    .addTo(controller2);
  
  var scene1c = new ScrollScene({triggerElement: '#community', duration: 1200}) 
    .setTween(fluffdancertween)
    .addTo(controller2);




    //business tweens
    var colortween1 = TweenMax.staggerFromTo('#business #red', 7, 
    { 
      opacity: 0
    }, 
    {
      opacity: .75,
      delay: 2,
    });
    var buildingtween1 = TweenMax.staggerFromTo('#business #mural', 3, 
    { 
      right: 150 + "%" 
    }, 
    {
      right:75 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

    var buildingtween2 = TweenMax.staggerFromTo('#business #scatv', 4, 
    { 
      right:150 + "%"

    }, 
    {
      right:50 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

    var buildingtween3 = TweenMax.staggerFromTo('#business #mamagina', 5, 
    { 
      right:150 + "%"
    }, 
    {
      right: 25 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

    var buildingtween4 = TweenMax.staggerFromTo('#business #grooves', 10, 
    { 
      right:150 + "%"
    }, 
    {
      right: 0 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });
    
    var snowtween1 = TweenMax.staggerFromTo('#business #snowday', 2, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 16,
      ease: Cubic.easeOut
    });

    var snowtween2 = TweenMax.staggerFromTo('#business #snowbank2', 2, 
    { 
      right: 150 + "%" 
    }, 
    {
      right: 0 + "%" ,
      delay: 15,
      ease: Cubic.easeOut
    });
    var snowtween3 = TweenMax.staggerFromTo('#business #snowbank1', 2, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 50 + "%",
      delay: 16,
      ease: Cubic.easeOut
    });

    var snowtween4 = TweenMax.staggerFromTo('#business #snowmonster', 2, 
    { 
      bottom: -150 + "%" 
    }, 
    {
      bottom: 0 + "%",
      delay: 18,
      ease: Cubic.easeOut
    });

    
    //Create scenes, set pins, trigger when images are visible, and add to controller
    var scene2 = new ScrollScene({triggerElement: '#business', duration: 20000}) 
      .setPin("#business")
      .addTo(controller2);

    var scene2a = new ScrollScene({triggerElement: '#business', duration: 6000}) 
      .setTween(colortween1)
      .addTo(controller2);

    var scene2b = new ScrollScene({triggerElement: '#business', duration: 9000}) 
      .setTween(buildingtween1)
      .addTo(controller2);

    var scene2c = new ScrollScene({triggerElement: '#business', duration: 8000}) 
      .setTween(buildingtween2)
      .addTo(controller2);

    var scene2d = new ScrollScene({triggerElement: '#business', duration: 7000}) 
      .setTween(buildingtween3)
      .addTo(controller2);

    var scene2e = new ScrollScene({triggerElement: '#business', duration: 6000}) 
      .setTween(buildingtween4)
      .addTo(controller2);

    var scene2f = new ScrollScene({triggerElement: '#business', duration: 12000}) 
      .setTween(snowtween1)
      .addTo(controller2);

    var scene2g = new ScrollScene({triggerElement: '#business', duration: 13000}) 
      .setTween(snowtween2)
      .addTo(controller2);

    var scene2h = new ScrollScene({triggerElement: '#business', duration: 14000}) 
      .setTween(snowtween3)
      .addTo(controller2);
        
    var scene21 = new ScrollScene({triggerElement: '#business', duration: 16000}) 
      .setTween(snowtween4)
      .addTo(controller2);


    


    // init controller for parallax
    var controller = new ScrollMagic({
      globalSceneOptions: {
        triggerHook: "onEnter", duration: $(window).height()*2}});

    // business scenes
    new ScrollScene({triggerElement: "#housing"})
            .setTween(TweenMax.from("#housing > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);
            //.addIndicators({zindex: 1, suffix: "1"});

    new ScrollScene({triggerElement: "#maps"})
            .setTween(TweenMax.from("#maps > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);
    
    new ScrollScene({triggerElement: "#transit"})
            .setTween(TweenMax.from("#transit > div", 1, {top: "-40%", ease: Linear.easeNone}))
            .addTo(controller);
            //.addIndicators({zindex: 1, suffix: "2"});
});