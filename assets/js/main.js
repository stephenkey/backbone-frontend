require.config({

  paths: {
    jquery: '/assets/js/libs/jquery-min',
    underscore: '/assets/js/libs/underscore-min',
    backbone: '/assets/js/libs/backbone-min',
    templates: '../../templates'
  }

});

require([

  'app',

], function( App ) {

  App.initialize();

});
