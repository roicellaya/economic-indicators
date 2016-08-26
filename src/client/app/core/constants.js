/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('MY_INDICATOR_URI', 'http://mindicador.cl/api/')
    .constant('SENDGRID_URI', 'https://api.sendgrid.com/v3/mail/')
    .constant('SENDGRID_API_KEY', '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')
    .constant('ADMIN_EMAIL', 'roicel.laya@gmail.com')
    .constant('_', window._);
})();
