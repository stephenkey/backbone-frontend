define([

  'jquery',
  'underscore',
  'backbone',
  'models/item',
  'text!templates/search.html'

], function( $, _, Backbone, Item, Template ) {


  var SearchView = Backbone.View.extend({

    el: $(".queue"),

    events: {

        "keyup #q": "search"  

    },

    search: _.debounce( function( event ) {

        $(".icon").html('<img src="/assets/img/loading.gif">');
        
        var item = new Item();

        item.fetch({
            success: function ( item ) {
              $("queue-results ul").empty();

              var i = item.toJSON();
              
              var data = {
                results: i.results
              };

              var compiledTemplate = _.template( Template, data );
              $(".queue-results ul").html( compiledTemplate );
              $(".icon").html('<img src="assets/img/spy_glass.png">');

            }
        })

    }, 2000)

  });

  return SearchView;
  
});