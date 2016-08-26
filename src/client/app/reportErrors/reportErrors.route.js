(function() {
  'use strict';

  angular
    .module('app.reportErrors')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'reportError',
        config: {
          url: '/reportError',
          templateUrl: 'app/reportErrors/templates/report-error.html',
          controller: 'ReportErrorController',
          controllerAs: 'vm',
          title: 'Report Error',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Reportar Error'
          }
        }
      }
    ];
  }
})();
