'use strict';

(function() {

  /**
   * @ngdoc function
   * @name wForecastApp.factory:WeatherFactory
   * @description
   * # WeatherFactory
   * Factory of the wForecastApp
   */
  var WeatherFactory = function(REQUEST, RequestFactory, $q) {
    var WeatherFactory = {};

    // Faz uma requisição para recuperar os dados da previsão do tempo
    WeatherFactory.getWeather = function(city, scale) {
      var defer = $q.defer();
      RequestFactory.get(REQUEST.api.url + REQUEST.api.weatherbycity + city + REQUEST.api.scale + scale + REQUEST.api.key).then(function(data) {
        data = data.data;
        if (typeof data === 'object') {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    return WeatherFactory;
  };

  WeatherFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('wForecastApp')
    .factory('WeatherFactory', WeatherFactory);
})();
