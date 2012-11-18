var GMAPS = window.GMAPS || {};
GMAPS.mainMap = function() {
  var map;

  function showPosition(position) {
    position = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(position);

    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: position,
      title: "You are *somewhere* here!",
      map: map
    });

    var infowindow = new google.maps.InfoWindow({
      content: "You are *somewhere* here!"
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    //infowindow.open(map,marker);

  }

  function initAddress() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
      position = new google.maps.LatLng(0, 0);
      map.setCenter(position);
    }
  }

  return {
  
    initMap : function() {
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
      initAddress();
    },
  };
}();


GMAPS.miniMap = function() {
  var map;
  var marker;

  function showPosition(position) {
    position = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(position);

    marker = new google.maps.Marker({
      animation: google.maps.Animation.BOUNCE,
      draggable: true,
      position: position,
      title: "Drag me where you want!",
      map: map
    });

    var infowindow = new google.maps.InfoWindow({
      content: "Drag me where you want!"
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    infowindow.open(map,marker);

    google.maps.event.addListener(marker, 'drag', function() {
      infowindow.close(map,marker);
    });

    google.maps.event.addListener(marker, 'dragend', function() {
      document.getElementById('micropost_lat').value = marker.getPosition().lat();
      document.getElementById('micropost_lon').value = marker.getPosition().lng();
    });


  }

  function initAddress() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
      position = new google.maps.LatLng(0, 0);
      map.setCenter(position);
    }
  }

  return {
  
    initMap : function() {
      map = new google.maps.Map(document.getElementById('mini_map'), {
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
      initAddress();
    },
  };
}();

document.addEventListener("DOMContentLoaded", GMAPS.mainMap.initMap, false);
document.addEventListener("DOMContentLoaded", GMAPS.miniMap.initMap, false);
