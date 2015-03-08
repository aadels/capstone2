$(function() {

  var isTouch = 'ontouchstart' in document.documentElement;

  //window height & width
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.fullwidth').css('width', wwidth);
  $('.50height').css('height', wheight * .50);
  $('.50width').css('width', wwidth * .50);
  $('.panelpic').css('width', wwidth * .25);


  $(window).resize(function() {
  var wheight = $(window).height(); //get height of the window
  var wwidth = $(window).width(); //get width of the window
  $('.fullheight').css('height', wheight);
  $('.50height').css('height', wheight * .50);
  $('.50width').css('width', wwidth * .50);
  $('.fullwidth').css('width', wwidth);
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

  // init controller for for Fluff , Events, and Building Tweens
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
      bottom: 50 + "%",
      delay: 9, 
      ease: Cubic.easeOut
    });

    var flufftween2 = TweenMax.staggerFromTo('#community .smpic', 5, 
    { 
      right: 40 + "%",
      bottom: 50 + "%",

    }, 
    {
      right: 60 + "%",
      bottom: 150 + "%",
      delay: 17, 
      ease: Cubic.easeOut
    });

  var fluffdancertween = TweenMax.staggerFromTo('#community .lgpic', 3, 
    { 
      bottom: -150 + "%" 
    }, 
    {
      bottom: -5 + "%" ,
      ease: Cubic.easeOut
    });

  var fmtween1 = TweenMax.staggerFromTo('#community .lgpic2', 8, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 20,
      ease: Cubic.easeOut
    });
  
  var fmtween2 = TweenMax.staggerFromTo('#community .lgpic3', 9, 
    { 
      bottom: -150 + "%" 
    }, 
    {
      bottom: -5 + "%" ,
      delay: 24,
      ease: Cubic.easeOut
    });

  ////Create scenes, set pins, trigger when images are visible, and add to controller
  var scene1 = new ScrollScene({triggerElement: "#community", duration: 9000})
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

  var scene1d = new ScrollScene({triggerElement: '#community', duration: 6000}) 
    .setTween(fmtween1)
    .addTo(controller2);

  var scene1e = new ScrollScene({triggerElement: '#community', duration: 8000}) 
    .setTween(fmtween2)
    .addTo(controller2);


    //event tweens
    var snowtween1 = TweenMax.staggerFromTo('#events .snowpic1', 2, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 0 + "%",
      delay: 16,
      ease: Cubic.easeOut
    });

    var snowtween2 = TweenMax.staggerFromTo('#events .snowpic2', 2, 
    { 
      right: 150 + "%" 
    }, 
    {
      right: 25 + "%" ,
      delay: 15,
      ease: Cubic.easeOut
    });
    var snowtween3 = TweenMax.staggerFromTo('#events .snowpic3', 2, 
    { 
      left: 125 + "%" 
    }, 
    {
      left: 25 + "%",
      delay: 16,
      ease: Cubic.easeOut
    });

        var snowtween4 = TweenMax.staggerFromTo('#events .snowpic4', 2, 
    { 
      bottom: -150 + "%",
      left: 25 + "%"
    }, 
    {
      bottom: 0 + "%",
      left: 25 + "%",
      delay: 18,
      ease: Cubic.easeOut
    });

    var scene2 = new ScrollScene({triggerElement: '#events', duration: 15000}) 
      .setPin("#events")
      .addTo(controller2);
    
    var scene2f = new ScrollScene({triggerElement: '#events', duration: 8000}) 
      .setTween(snowtween1)
      .addTo(controller2);

    var scene2g = new ScrollScene({triggerElement: '#events', duration: 9000}) 
      .setTween(snowtween2)
      .addTo(controller2);

    var scene2h = new ScrollScene({triggerElement: '#events', duration: 10000}) 
      .setTween(snowtween3)
      .addTo(controller2);
        
    var scene2i = new ScrollScene({triggerElement: '#events', duration: 12000}) 
      .setTween(snowtween4)
      .addTo(controller2);

    //business tweens
    var colortween1 = TweenMax.staggerFromTo('#business .colorpic1', 7, 
    { 
      opacity: 0
    }, 
    {
      opacity: .75,
      delay: 2,
    });
    var buildingtween1 = TweenMax.staggerFromTo('#business .bldgpic1', 3, 
    { 
      right: 150 + "%" 
    }, 
    {
      right:75 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

    var buildingtween2 = TweenMax.staggerFromTo('#business .bldgpic2', 4, 
    { 
      right:150 + "%"

    }, 
    {
      right:50 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

    var buildingtween3 = TweenMax.staggerFromTo('#business .bldgpic3', 5, 
    { 
      right:150 + "%"
    }, 
    {
      right: 25 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

    var buildingtween4 = TweenMax.staggerFromTo('#business .bldgpic4', 10, 
    { 
      right:150 + "%"
    }, 
    {
      right: 0 + "%",
      delay: 11,
      ease: Cubic.easeOut
    });

  
    //Create scenes, set pins, trigger when images are visible, and add to controller
    var scene3 = new ScrollScene({triggerElement: '#business', duration: 20000}) 
      .setPin("#business")
      .addTo(controller2);

    var scene3a = new ScrollScene({triggerElement: '#business', duration: 6000}) 
      .setTween(colortween1)
      .addTo(controller2);

    var scene3b = new ScrollScene({triggerElement: '#business', duration: 9000}) 
      .setTween(buildingtween1)
      .addTo(controller2);

    var scene3c = new ScrollScene({triggerElement: '#business', duration: 8000}) 
      .setTween(buildingtween2)
      .addTo(controller2);

    var scene3d = new ScrollScene({triggerElement: '#business', duration: 7000}) 
      .setTween(buildingtween3)
      .addTo(controller2);

    var scene3e = new ScrollScene({triggerElement: '#business', duration: 6000}) 
      .setTween(buildingtween4)
      .addTo(controller2);

    


    


    // init controller for parallax
    var controller = new ScrollMagic({
      globalSceneOptions: {
        triggerHook: "onEnter", duration: $(window).height()*2}});

    // business scenes
    new ScrollScene({triggerElement: "#housing"})
            .setTween(TweenMax.from("#housing > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);


    new ScrollScene({triggerElement: "#maps"})
            .setTween(TweenMax.from("#maps > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);
    
    new ScrollScene({triggerElement: "#transit"})
            .setTween(TweenMax.from("#transit > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);

    new ScrollScene({triggerElement: "#market1"})
            .setTween(TweenMax.from("#market1 > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);

    new ScrollScene({triggerElement: "#market2"})
            .setTween(TweenMax.from("#market2 > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);
    
    new ScrollScene({triggerElement: "#market3"})
            .setTween(TweenMax.from("#market3 > div", 1, {top: "-60%", ease: Linear.easeNone}))
            .addTo(controller);

});

//redraw map on resize
$(window).resize(function(){
  location.reload();
});

  var kmlUrl = 'https://developers.google.com/maps/tutorials/kml/westcampus.kml';
  var kmlOptions = {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  };
  var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);

//add tour stops
  var locations = [
    ['Union United', 42.381307, -71.099733, 10, 'http://player.vimeo.com/video/111527649'],
    ['Affordable Housing', 42.380508, -71.100172, 9,'http://player.vimeo.com/video/111537719'],
    ['Local Jobs and Workers Rights', 42.380746,    -71.098092, 8,'http://player.vimeo.com/video/111542966'],
    ['Small Business Protection', 42.38011, -71.097088, 7,'http://player.vimeo.com/video/111544069'],
    ['History of Community Organizing', 42.379674, -71.096366, 6,'http://player.vimeo.com/video/111551065'],
    ['Green Space', 42.377, -71.096093, 5,'http://player.vimeo.com/video/111554655'],
    ['Green Line Extension', 42.376768, -71.095627, 4,'http://player.vimeo.com/video/111555617'],
    ['Public Safety', 42.378882, -71.092666, 3,'http://player.vimeo.com/video/111558282'],
    ['Arts, Culture and Community Resources', 42.379684, -71.093669, 2,'http://player.vimeo.com/video/111529297'],
    ['Participatory Planning', 42.379332, -71.094231, 1,'http://player.vimeo.com/video/111531551']
  ];

 var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(42.379198, -71.094261), // Union Square, Somerville, MA
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      //set map styles
      styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"saturation":"-1"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.locality","elementType":"geometry","stylers":[{"visibility":"off"},{"saturation":"1"}]},{"featureType":"administrative.neighborhood","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"off"},{"saturation":"28"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#66a8b8"},{"visibility":"on"}]}]
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        clickable: true,
        url:locations[i][4]
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
          window.location.href = marker.url;
        }
      })(marker, i));
    }
