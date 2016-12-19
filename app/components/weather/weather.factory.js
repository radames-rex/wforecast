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

    WeatherFactory.getWeather = function(city) {
      var defer = $q.defer();
      RequestFactory.get(REQUEST.api.url + REQUEST.api.weatherbycity + city + REQUEST.api.key).then(function(data) {
        data = data.data;
        console.log(data);
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
