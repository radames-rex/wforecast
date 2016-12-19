'use strict';

/**
 * @ngdoc overview
 * @name wForecastApp
 * @description
 * # wForecastApp
 *
 * Main module of the application.
 */
angular
  .module('wForecastApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ngMaterial'
  ])
  .constant('PATH', {
    main: '/wforecast',
    weather: '/weather'
  })
  .constant('REQUEST', {
    api: {
      url: 'http://api.openweathermap.org',
      weatherbycity: '/data/2.5/weather?q=',
      scale: '&units=',
      key: '&appid=4abbabeb92b59021a08e2cfa48d7ec0d'
    }
  })
  .config(function($stateProvider, $urlRouterProvider, $translateProvider, PATH) {

    /* Configuração do provider de universalização e da linguagem padrão. */
    $translateProvider.useStaticFilesLoader({
      prefix: 'translate/messages-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('pt');

    /* Configuração dos estados e rotas da aplicação */
    $stateProvider.state('main', {
      abstract: true,
      url: PATH.main,
      templateUrl: 'views/main.html'
    }).state('main.weather', {
      url: PATH.weather,
      templateUrl: 'views/weather.html',
      controller: 'WeatherCtrl as ctrl'
    });

    $urlRouterProvider.otherwise(function() {
      return '/wforecast/weather';
    });

  });
