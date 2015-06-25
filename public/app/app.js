/**
 * APP
 */
angular
    .module('app', [
        'app.base',
        'app.state',
        'app.components'
    ]);

/**
 * APP vendor
 */
angular
    .module('app.base', [
        'ui.router',
        'ui.bootstrap'
    ]);

 /**
  * APP components
  */
angular
    .module('app.components', [

    ]);
