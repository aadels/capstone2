  $(document).ready(function($) {

  var isTouch = 'ontouchstart' in document.documentElement;

  //window height & width
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.75height').css('height', wheight * .75);
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
    /*tween variables
    establish current slide index at start*/
    var rightPositionStart1;
    var rightPositionStart2;
    var rightPositionStart3;
    var leftPositionStart1;
    var rightPositionEnd1;
    var rightPositionEnd2;
    var rightPositionEnd3;
    var rightPositionEnd4;
    var leftPositionEnd1;
    var leftPositionEnd2;
    var leftPositionEnd3;
    var leftPositionEnd4;

    rightPositionStart1 = 150;
    rightPositionStart2 = 30;
    rightPositionEnd1 = 75;
    rightPositionEnd2 = 50;
    rightPositionEnd3 = 25;
    rightPositionEnd4 = 0;


    leftPositionStart1 = 125;
    leftPositionStart2 = 150;
    leftPositionEnd1 = -50;
    leftPositionEnd2 = 50;
    leftPositionEnd3 = 0;
    leftPositionEnd4 = 75;
    
 //fluff tweens
  var flufftween = TweenMax.staggerFromTo('#community .smpic', 4, 
    { 
      right:rightPositionStart2 + "%" ,
      opacity: 0 
    }, 
    {
      delay: 1,
      right:rightPositionStart2 + "%",
      opacity: 1, 
      ease: Back.easeOut
    });

  var flufftween2 = TweenMax.staggerFromTo('#community .smpic', 5, 
    { 
      right:rightPositionStart2 + "%",
      opacity: 1 
    }, 
    {
      right:rightPositionStart2 + "%",
      delay: 25,
      opacity: 0, 
      ease: Back.easeOut
    });  
  
  var fluffguytween = TweenMax.staggerFromTo('#community .lgpic', .5, 
 { 
      left:leftPositionStart1 + "%" 
    }, 
    {
      left:leftPositionEnd2 + "%",
      delay: 10,
      ease: Cubic.easeOut
    });

  var fluffdancertween = TweenMax.staggerFromTo('#community .lgpic2', .5, 
    { 
      right:rightPositionStart1 + "%" 
    }, 
    {
      right:rightPositionEnd2 + "%" ,
      ease: Cubic.easeOut
    });

  ////Create scenes, set pins, trigger when images are visible, and add to controller
  var scene1 = new ScrollScene({triggerElement: "#community", duration: 14000})
    .setPin("#community")
    .addTo(controller2);

  var scene1a = new ScrollScene({triggerElement: '#community', duration: 1200}) 
    .setTween(flufftween)
    .addTo(controller2);

  var scene1b = new ScrollScene({triggerElement: "#community", duration: 7000})

    .setTween(fluffguytween)
    .addTo(controller2);

  var scene1c = new ScrollScene({triggerElement: '#community', duration: 8000}) 
    .setTween(fluffdancertween)
    .addTo(controller2);

  var scene1d = new ScrollScene({triggerElement: '#community', duration: 9000}) 
    .setTween(flufftween2)
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
      right:rightPositionStart1 + "%" 
    }, 
    {
      right:rightPositionEnd1 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

    var buildingtween2 = TweenMax.staggerFromTo('#business #scatv', 4, 
    { 
      right:rightPositionStart1 + "%"

    }, 
    {
      right:rightPositionEnd2 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

    var buildingtween3 = TweenMax.staggerFromTo('#business #mamagina', 5, 
    { 
      right:rightPositionStart1 + "%"
    }, 
    {
      right:rightPositionEnd3 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

    var buildingtween4 = TweenMax.staggerFromTo('#business #grooves', 10, 
    { 
      right:rightPositionStart1 + "%"
    }, 
    {
      right:rightPositionEnd4 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });
    
    var snowtween1 = TweenMax.staggerFromTo('#business #snowday', 2, 
    { 
      left:leftPositionStart1 + "%" 
    }, 
    {
      left:leftPositionEnd3 + "%",
      delay: 16,
      ease: Cubic.easeOut
    });

    var snowtween2 = TweenMax.staggerFromTo('#business #snowbank2', 2, 
    { 
      right:rightPositionStart1 + "%" 
    }, 
    {
      right:rightPositionEnd4 + "%" ,
      delay: 15,
      ease: Cubic.easeOut
    });
    var snowtween3 = TweenMax.staggerFromTo('#business #snowbank1', 2, 
    { 
      left:leftPositionStart1 + "%" 
    }, 
    {
      left:leftPositionEnd2 + "%",
      delay: 16,
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