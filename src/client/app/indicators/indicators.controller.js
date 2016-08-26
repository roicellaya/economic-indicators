(function() {
  'use strict';

  angular
    .module('app.indicators')
    .controller('IndicatorsController', IndicatorsController)
    .controller('IndicatorModalController', IndicatorModalController);

  IndicatorsController.$inject = ['indicatorsService', '_', '$uibModal', '$scope', 'toastr'];

  /* @ngInject */
  function IndicatorsController(indicatorsService, _, $uibModal, $scope, toastr) {
    var vm = this;
    vm.title = 'Indicadores';
    vm.openModal = openModal;

    var valid_keys = ['codigo', 'nombre', 'serie', 'unidad_medida'];

    //Current date and first date of month
    var now = Date.now();
    
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    
    firstDay = firstDay.getTime();

    activate();

    ////////////////

    function activate() {


      //Get data of dollar
      indicatorsService.getByIndicator({indicator: 'dolar'}).$promise
      .then(function getIndicators(indicators) {
        vm.dolar = _.pick(indicators, valid_keys);

        //Get only dates from first day of month
        _.remove(vm.dolar.serie, getValidDates);

        vm.dolarChart = {};
        vm.dolarChart.type = "ColumnChart";
        vm.dolarChart.options = {
          'title': 'Variación del dólar durante el mes.',
          hAxis: {
            title: 'Días'
          },
          vAxis: {
            title: 'Cantidad'
          }
        };

        vm.dolarChart.data = {
          "cols": [
            {
              id: "d",
              label: "Días",
              type: "string"
            },
            {
              id: "c",
              label: "Cantidad",
              type: "number"
            }
          ],
          "rows": _.reverse(_.map(vm.dolar.serie, formatDays))
        };

        vm.dolarChart.detail = {
          'title': 'Dólar',
          'current': (vm.dolar.serie[0]) ? vm.dolar.serie[0] : null,
          'previous': (vm.dolar.serie[1]) ? vm.dolar.serie[1] : null
        };
      });

      //Get data of euro
      indicatorsService.getByIndicator({indicator: 'euro'}).$promise
      .then(function getIndicators(indicators) {
        vm.euro = _.pick(indicators, valid_keys);

        //Get only dates from first day of month
        _.remove(vm.euro.serie, getValidDates);

        vm.euroChart = {};
        vm.euroChart.type = "ColumnChart";
        vm.euroChart.options = {
          'title': 'Variación del euro durante el mes.',
          hAxis: {
            title: 'Días'
          },
          vAxis: {
            title: 'Cantidad'
          }
        };

        vm.euroChart.data = {
          "cols": [
            {
              id: "d",
              label: "Días",
              type: "string"
            },
            {
              id: "c",
              label: "Cantidad",
              type: "number"
            }
          ],
          "rows": _.reverse(_.map(vm.euro.serie, formatDays))
        };

        vm.euroChart.detail = {
          'title': 'Euro',
          'current': (vm.euro.serie[0]) ? vm.euro.serie[0] : null,
          'previous': (vm.euro.serie[1]) ? vm.euro.serie[1] : null
        };
      });

      //Get data of uf
      indicatorsService.getByIndicator({indicator: 'uf'}).$promise
      .then(function getIndicators(indicators) {
        vm.uf = _.pick(indicators, valid_keys);

        //Get only dates from first day of month
        _.remove(vm.uf.serie, getValidDates);

        vm.ufChart = {};
        vm.ufChart.type = "ColumnChart";
        vm.ufChart.options = {
          'title': 'Variación de la unidad de fomento durante el mes.',
          hAxis: {
            title: 'Días'
          },
          vAxis: {
            title: 'Cantidad'
          }
        };

        vm.ufChart.data = {
          "cols": [
            {
              id: "d",
              label: "Días",
              type: "string"
            },
            {
              id: "c",
              label: "Cantidad",
              type: "number"
            }
          ],
          "rows": _.reverse(_.map(vm.uf.serie, formatDays))
        };

        vm.ufChart.detail = {
          'title': 'Unidad de Fomento',
          'current': (vm.uf.serie[0]) ? vm.uf.serie[0] : null,
          'previous': (vm.uf.serie[1]) ? vm.uf.serie[1] : null
        };
      });

      //Get data of ipc
      indicatorsService.getByIndicator({indicator: 'ipc'}).$promise
      .then(function getIndicators(indicators) {
        vm.ipc = _.pick(indicators, valid_keys);

        //Get only dates from first day of month
        _.remove(vm.ipc.serie, getValidDates);

        vm.ipcChart = {};
        vm.ipcChart.type = "ColumnChart";
        vm.ipcChart.options = {
          'title': 'Variación del índice de precios al cosumidor durante el mes.',
          hAxis: {
            title: 'Días'
          },
          vAxis: {
            title: 'Cantidad'
          }
        };

        vm.ipcChart.data = {
          "cols": [
            {
              id: "d",
              label: "Días",
              type: "string"
            },
            {
              id: "c",
              label: "Cantidad",
              type: "number"
            }
          ],
          "rows": _.reverse(_.map(vm.ipc.serie, formatDays))
        };

        vm.ipcChart.detail = {
          'title': 'Índice de Precios al Consumidor',
          'current': (vm.ipc.serie[0]) ? vm.ipc.serie[0] : null,
          'previous': (vm.ipc.serie[1]) ? vm.ipc.serie[1] : null
        };
      });

      //Get data of utm
      indicatorsService.getByIndicator({indicator: 'utm'}).$promise
      .then(function getIndicators(indicators) {
        vm.utm = _.pick(indicators, valid_keys);

        //Get only dates from first day of month
        _.remove(vm.utm.serie, getValidDates);

        vm.utmChart = {};
        vm.utmChart.type = "ColumnChart";
        vm.utmChart.options = {
          'title': 'Variación de la unidad tributaria mensual durante el mes.',
          hAxis: {
            title: 'Días'
          },
          vAxis: {
            title: 'Cantidad'
          }
        };

        vm.utmChart.data = {
          "cols": [
            {
              id: "d",
              label: "Días",
              type: "string"
            },
            {
              id: "c",
              label: "Cantidad",
              type: "number"
            }
          ],
          "rows": _.reverse(_.map(vm.utm.serie, formatDays))
        };

        vm.utmChart.detail = {
          'title': 'Unidad Tributaria Mensual',
          'current': (vm.utm.serie[0]) ? vm.utm.serie[0] : null,
          'previous': (vm.utm.serie[1]) ? vm.utm.serie[1] : null
        };
      });
    }

    function getValidDates(date) {
      var millisec = Date.parse(date.fecha);

      return !(millisec <= now && millisec >= firstDay);
    }

    function formatDays(day) {
      var currentDate = new Date(day.fecha);
      return {
        c: [
          {v: currentDate.getDate()},
          {v: day.valor}
        ]
      };
    }

    function openModal(detail) {
      if(!detail.current || !detail.previous) {
        toastr.error('No hay datos suficientes para ver detalles.');
        return;
      }
      var modalInstance = $uibModal.open({
        controller: 'IndicatorModalController',
        controllerAs: 'vm',
        animation: true,
        scope: $scope,
        templateUrl: '/app/indicators/templates/indicator-modal.html',
        resolve: {
          detail: function () {
            return detail;
          }
        }
      });
    }
  }

  function IndicatorModalController($uibModalInstance, detail) {
    var vm = this;
    vm.detail = {};
    vm.detail.title = detail.title;
    vm.detail.currentVal = detail.current.valor;
    vm.detail.percentChange = getPercentChange(detail).toFixed(2);

    vm.closeModal = closeModal;

    function closeModal() {
      $uibModalInstance.dismiss('cancel');
    }

    function getPercentChange(data) {
      return ((data.current.valor-data.previous.valor)/data.previous.valor)*100;
    }
  }
})();