/**
 * @ngdoc service
 * @name alerta.Geolocation.geolocation
 * @requires $window
 * @description
 * This Factory handle few services of geolocation.
 */
(function () {
  'use strict';

  angular
    .module('alerta.Geolocation')
    .factory('geolocation', geolocation);

  geolocation.$inject = ['$window'];

  function geolocation($window) {
    var map;
    var service = {
      showGeolocation: showGeolocation,
      getCenterPosition: getCenterPosition
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
      var infoWindow = new $window.google.maps.InfoWindow({map: map});
      if ($window.navigator.geolocation) {
        $window.navigator.geolocation.getCurrentPosition(function(position) {
          map = new $window.google.maps.Map(document.getElementById('map'), {
            center: {lat: position.coords.latitude, lng: position.coords.longitude},
            zoom: 18
          });
          infoWindow.setContent('Location found.');
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
		}

    /**
     * @ngdoc method
     * @name alerta.Geolocation.service:geolocation#getCenterPosition
     * @methodOf alerta.Geolocation.service:geolocation#showGeolocation
     * @return {{latitude: Float, longitude: Float}}
     * @description
     * Get the center position in the map view.
     */
    function getCenterPosition() {
      return {
        latitude: map.getCenter().lat(),
        longitude: map.getCenter().lng()
      };
    }
  }

})();
