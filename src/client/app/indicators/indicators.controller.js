(function() {
  'use strict';

  angular
    .module('app.indicators')
    .controller('IndicatorsController', IndicatorsController);

  IndicatorsController.$inject = ['indicatorsService', '_', 'moment'];

  /* @ngInject */
  function IndicatorsController(indicatorsService, _, moment) {
    var vm = this;
    vm.title = 'Indicators';
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
  }
})();