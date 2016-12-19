'use strict';

describe('Controller: WeatherCtrl', function () {

  beforeEach(module('wForecastApp'));

  var WeatherCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeatherCtrl = $controller('WeatherCtrl', {
      $scope: scope
    });
  }));

  it('deve inicializar com a temperatura em Celsius', function () {
    expect(scope.temperature).toBe('metric');
  });

  it('deve inicializar mostrando apenas a previsão da data atual', function () {
    expect(scope.more).toBe(false);
  });

  it('deve fazer a busca de previsões do tempo', function () {
    scope.city = 'Teresina';
    expect(scope.forecast).toBe('');
    scope.searchForecast();
  });
});
