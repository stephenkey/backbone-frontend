// Filename: router.js
define([

  'jquery',
  'underscore',
  'backbone',
  'views/home',
  'views/search',
  'views/recipient'

], function( $, _, Backbone, HomeView, SearchView, RecipientView ) {

  
  var AppRouter = Backbone.Router.extend({
    routes: {
      "r/:id": "recipient",
      '*actions': 'home'
    }
  });
  
  var initialize = function() {

    var router = new AppRouter;
    
    router.on('route:home', function( actions ) {
    
        var home = new HomeView();
        home.render();

        var search = new SearchView();

    });

    router.on('route:recipient', function( id ) {
    
        var recipient = new RecipientView();
        recipient.render();

        var search = new SearchView();

    });

    Backbone.history.start();

  };

  return { 
    initialize: initialize
  };

});
