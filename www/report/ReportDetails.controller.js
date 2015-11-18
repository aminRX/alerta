(function () {
  'use strict';

  angular
    .module('alerta')
    .controller('ReportDetailsController', ReportDetailsController);

  ReportDetailsController.$inject = [];

  function ReportDetailsController() {
    var vm = this;
    vm.title = 'ReportDetailsController';

    activate();

    ////////////////

    function activate() {
    }
  }

})();
