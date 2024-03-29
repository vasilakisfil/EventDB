var GMAPS = window.GMAPS || {};
GMAPS.mainMap = function() {
  var map;
  var infowindow = new google.maps.InfoWindow();
  var jsonObject = {};

  function addMarkers() {
    var xhr = new XMLHttpRequest();
    xhr.open( "GET", "/home.json", true );
    xhr.onreadystatechange = function () {
      if ( xhr.readyState == 4 && xhr.status == 200 ) {
        jsonObject = JSON.parse( xhr.responseText );
        for (var i=0; i<jsonObject.length; i++) {
          for (var j=0; j<jsonObject[i].microposts.length; j++) {
            (function(Name, Title, Content, Latitude, Longitude) {
              return function() {
                //alert(Name + "\n" + Title + "\n" + Content + "\n" + Latitude + "\n" + Longitude + "\n");  //<-- this works!
                var position = new google.maps.LatLng(Latitude, Longitude);
                var contentString = "<h4>" + Name.bold() + "</h4>" + "<br />" + Title.bold()
                                + "<br />" + Content;

                var marker = new google.maps.Marker({
                  position: position,
                  title: Title,
                  map: map
                });
                google.maps.event.addListener(marker, 'click', (function(marker, contentString) { 
                    return function() { 
                      infowindow.setContent(contentString); 
                      infowindow.open(map, marker); 
                    } 
                })(marker, contentString));
              };
            })(jsonObject[i].name, jsonObject[i].microposts[j].title,
               jsonObject[i].microposts[j].content,
               jsonObject[i].microposts[j].lat,
               jsonObject[i].microposts[j].lon)();
          }
        }
      }
    };
    xhr.send(null);
  }

  function createMap() {
    map = new google.maps.Map(document.getElementById('main_map'), {
      zoom: 10,
      panControl: true,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
      },
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: true,
      scrollwheel: false,
      center: new google.maps.LatLng(37.975327,23.728701),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }


  function initAddress() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
      var position = new google.maps.LatLng(0, 0);
      map.setCenter(position);
    }
  }

  function showPosition(position) {
    var position = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(position);
  }

  return {

    initMap : function() {
      createMap();
      initAddress();
      addMarkers();
    }
  };
}();

document.addEventListener("DOMContentLoaded", GMAPS.mainMap.initMap, false);