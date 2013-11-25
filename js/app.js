'use strict';

angular.module('countdown', ['firebase', 'ui.bootstrap']) //Create the app module and include firebase and ui.bootstrap
.constant('moment', moment); //Makes it so you can use the moment.js library inside of your controllers, filters, etc with dependency injection