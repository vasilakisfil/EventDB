var map;
var geocoder;

function initialize_address() {
  var address = "Athens";
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}



function initialize_maps()
{
  var position;
  geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': "Athens"}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      position = results[0].geometry.location;
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
  map = new google.maps.Map(document.getElementById('map_canvas'), {
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
    center: new google.maps.LatLng(-33.92, 151.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  initialize_address();
}
