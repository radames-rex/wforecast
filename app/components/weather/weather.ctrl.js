'use strict';

(function() {

  /**
   * @ngdoc function
   * @name wForecastApp.controller:WeatherCtrl
   * @description
   * # WeatherCtrl
   * Controller of the wForecastApp
   */
  var WeatherCtrl = function($scope, WeatherFactory, $timeout) {

    $scope.forecast = '';
    $scope.temperature = 'metric';
    $scope.more = false;

    // Busca toda a previsão do tempo para uma cidade e em uma determinada escala
    $scope.searchForecast = function(){
      WeatherFactory.getWeather($scope.city, $scope.temperature).then(function(data){
        $scope.forecast = data;
      });
    };

  };

  WeatherCtrl.$inject = ['$scope', 'WeatherFactory', '$timeout'];

  angular
    .module('wForecastApp')
    .controller('WeatherCtrl', WeatherCtrl);
})();
