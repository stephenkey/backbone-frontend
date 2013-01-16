require.config({

  paths: {
    jquery: '/backbone-frontend/assets/js/libs/jquery-min',
    underscore: '/backbone-frontend/assets/js/libs/underscore-min',
    backbone: '/backbone-frontend/assets/js/libs/backbone-min',
    templates: '../../templates'
  }

});

require([

  'app',

], function( App ) {

  App.initialize();

});
