angular.module('alerta', ['ionic', 'alerta.Geolocation'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'tabs/tabs.html'
      })

      .state('tab.geolocation', {
        url: '/geolocation',
        views: {
          'tab-geolocation-show': {
            controller: 'GeolocationShowController as geo',
            templateUrl: 'geolocation/show.html'
          }
        },
        data: {
        }
      })

      .state('report', {
        url: '/report',
        abstract: true,
        templateUrl: 'report/report.html'
      })

      .state('report.details', {
        url: '/details',
        views: {
          'report-details': {
            controller: 'ReportDetailsController as detail',
            templateUrl: 'report/details.html'
          }
        }
      });



  $urlRouterProvider.otherwise('/tab/geolocation');

});
