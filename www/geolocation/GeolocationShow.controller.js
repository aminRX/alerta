/**
 * @ngdoc controller
 * @name alerta.controller:GeolocationShowController
 * @requires geolocation
 * @description
 * This controller belongs to geolocation/show.html
 *
 */
(function () {
  'use strict';

  angular
    .module('alerta')
    .controller('GeolocationShowController', GeolocationShowController);

  GeolocationShowController.$inject = ['geolocation'];

  function GeolocationShowController(geolocation) {
    var vm = this;
    vm.title = 'GeolocationShowController';
    vm.report = report;
    activate();

    ////////////////

    /**
     * @ngdoc method
     * @name alerta.controller:GeolocationShowController#active
     * @methodOf alerta.controller:GeolocationShowController
     * @description
     * This function display the map automatically.
     */
    function activate() {
      geolocation.showGeolocation();
    }

    /**
     * @ngdoct method
     * @name alerta.controller:GeolocationShowController#report
     * @methodOf alerta.controller:GeolocationShowController
     * @description
     * This function sends report location.
     */
    function report() {
      console.log(geolocation.getCenterPosition());
    }

  }

})();
