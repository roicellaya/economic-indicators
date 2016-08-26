(function() {
  'use strict';

  angular
    .module('app.indicators')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'indicators',
        config: {
          url: '/indicators',
          templateUrl: 'app/indicators/templates/indicators.html',
          controller: 'IndicatorsController',
          controllerAs: 'vm',
          title: 'Indicators',
          settings: {
            nav: 1,
            content: '<i class="fa fa-lock"></i> Indicadores'
          }
        }
      }
    ];
  }
})();
