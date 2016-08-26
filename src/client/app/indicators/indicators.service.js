(function() {
  'use strict';

  angular
    .module('app.indicators')
    .factory('indicatorsService', indicatorsService);

  indicatorsService.$inject = ['$resource', 'MY_INDICATOR_URI'];

  /* @ngInject */
  function indicatorsService($resource, MY_INDICATOR_URI) {
    var service = $resource(MY_INDICATOR_URI + ':indicator', {indicator: '@indicator'},
    {
      get: {
        method: 'GET'
      },
      getByIndicator: {
        method: 'GET'
      }
    });

    return service;
    ////////////////
  }
})();