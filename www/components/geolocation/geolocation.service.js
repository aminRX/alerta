/**
 * @ngdoc service
 * @name alerta.Geolocation.geolocation
 * @description
 * This Factory handle few services of geolocation.
 */
(function () {
  'use strict';

  angular
    .module('alerta.Geolocation')
    .factory('geolocation', geolocation);

  geolocation.$inject = [];

  function geolocation() {
    var service = {
      showGeolocation: showGeolocation
    };
    return service;

    /**
     * @ngdoc method
     * @name alerta.Geolocation.service:geolocation#showGeolocation
     * @methodOf alerta.Geolocation.service:geolocation#showGeolocation
     * @description
     * Display the map in the cliant position.
     */
    function showGeolocation() {
      var infoWindow = new google.maps.InfoWindow({map: map});

      // Try HTML5 geolocation.
      if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: position.coords.latitude, lng: position.coords.longitude},
            zoom: 18
          });
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
		}

  }

})();
