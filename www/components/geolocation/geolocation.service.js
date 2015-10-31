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
     * Display the map.
     */
    function showGeolocation() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
		}

  }

})();
