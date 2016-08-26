(function() {
  'use strict';

  angular
    .module('app.reportErrors')
    .controller('ReportErrorController', ReportErrorController);

  ReportErrorController.$inject = ['reportErrorsService', 'ADMIN_EMAIL'];

  /* @ngInject */
  function ReportErrorController(reportErrorsService, ADMIN_EMAIL) {
    var vm = this;
    vm.title = 'Formulario de reporte de error';
    vm.sendMail = sendMail;

    activate();

    ////////////////

    function activate() {
    }

    function sendMail(form) {
      console.log(form);

      if (!form.$valid) {
        toastr.error('Uno o varios campos no fueron completados, debe completarlos todos.');
      } else {
        var data = {
          "personalizations": [
            {
              "to": [
                {
                  "email": ADMIN_EMAIL
                }
              ],
              "subject": "Reporte de error por " + form.email.$modelValue + "."
            }
          ],
          "from": {
            "email": form.email.$modelValue
          },
          "content": [
            {
              "type": "text/plain",
              "value": form.body.$modelValue
            }
          ]
        };

        reportErrorsService.send(data).$promise
        .then(function getResponse(res) {
          toastr.success('La información fue enviada correctamente.');
        },
        function getError(err) {
          toastr.error(err.statusText);
        });
      }
    }
  }
})();