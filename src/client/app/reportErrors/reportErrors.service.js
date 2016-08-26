(function() {
  'use strict';

  angular
    .module('app.reportErrors')
    .service('reportErrorsService', reportErrorsService);

  reportErrorsService.$inject = ['$resource', 'SENDGRID_URI', 'SENDGRID_API_KEY'];

  /* @ngInject */
  function reportErrorsService($resource, SENDGRID_URI, SENDGRID_API_KEY) {
    var service = $resource(SENDGRID_URI + 'send', {},
    {
      send: {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + SENDGRID_API_KEY,
          'content-type': 'application/json'
        }
      }
    });

    return service;
    ////////////////
  }
})();