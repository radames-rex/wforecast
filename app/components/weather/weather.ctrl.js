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

    var replaceSpecialChars = function(str) {
      str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
      str = str.replace(/[àáâãäå]/, "a");
      str = str.replace(/[ÈÉÊË]/, "E");
      str = str.replace(/[èéêë]/, "e");
      str = str.replace(/[ÌÍÎÏ]/, "I");
      str = str.replace(/[ìíîï]/, "i");
      str = str.replace(/[ÒÓÔÖ]/, "O");
      str = str.replace(/[òóôö]/, "o");
      str = str.replace(/[ÙÚÛÜ]/, "U");
      str = str.replace(/[ùúûü]/, "u");
      str = str.replace(/[Ç]/, "C");
      str = str.replace(/[ç]/, "c");
      str = str.toLowerCase();
      return str.replace(/[^a-z0-9\s]/gi, '');
    };

    var formatRepos = function(repos) {
      var reposFormatted = [];
      angular.forEach(repos, function(value){
        reposFormatted.push({
          owner: value.owner.login,
          name: value.name,
          language: value.language,
          stars: value.stargazers_count,
          forks: value.forks_count
        });
      });
      return reposFormatted;
    };

    $scope.ignoreAccents = function(item) {
      if($scope.search !== undefined){
        var text = replaceSpecialChars(item.name);
        var search = replaceSpecialChars($scope.search.undefined);
        return text.indexOf(search) > -1;
      }else{
        return true;
      }
    };

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
