/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('MY_INDICATOR_URI', 'http://mindicador.cl/api/')
    .constant('_', window._);
})();
