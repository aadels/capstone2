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

    // redraw map on resize
    $(window).resize(function(){
      location.reload();
    });

// Create and Initialise the Map (required) our google map below

    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

    var mapOptions = {

         // How zoomed in you want the map to start at (always required)

      zoom: 14,
      scrollwheel: false,
      // The latitude and longitude to center the map (always required)

      center: new google.maps.LatLng(42.379198, -71.094261), // Nova Scotia

      // How you would like to style the map. 
      // This is where you would paste any style found on [Snazzy Maps][1].
      // copy the Styles from Snazzy maps,  and paste that style info after the word "styles:"

        styles: [{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"saturation":"-1"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.locality","elementType":"geometry","stylers":[{"visibility":"off"},{"saturation":"1"}]},{"featureType":"administrative.neighborhood","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"off"},{"saturation":"28"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#66a8b8"},{"visibility":"on"}]}]
    };



    var mapElement = document.getElementById('map1');

      // Create the Google Map using out element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

    // Following section, you can create your info window content using html markup

      var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
          'sandstone rock formation in the southern part of the '+
          'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
          'south west of the nearest large town, Alice Springs; 450&#160;km '+
          '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
          'features of the Uluru - Kata Tjuta National Park. Uluru is '+
          'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
          'Aboriginal people of the area. It has many springs, waterholes, '+
          'rock caves and ancient paintings. Uluru is listed as a World '+
          'Heritage Site.</p>'+
          '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
          'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
          '(last visited June 22, 2009).</p>'+
          '</div>'+
          '</div>';


    // Define the image to use for the map marker (58 x 44 px)

      var image = 'http://uploads.webflow.com/537f700d5bb0a27f34444d0c/53b054015eb95f024f4d7c5e_map_marker.png';

    // Define the Lattitude and Longitude for the map location

      var myLatLng = new google.maps.LatLng(42.379198, -71.094261); 

    // Define the map marker characteristics

      var mapMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
      title:  'Tour of Union Square'

      });

     // Following Lines are needed if you use the Info Window to display content when map marker is clicked

     var infowindow = new google.maps.InfoWindow({
                          content: contentString
                      });

    // Following line turns the marker, into a clickable button and when clicked, opens the info window

          google.maps.event.addListener(mapMarker, 'click', function() {
              infowindow.open(map, mapMarker);
          });  

}