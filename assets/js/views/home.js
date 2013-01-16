define([

  'jquery',
  'underscore',
  'backbone',
  'text!templates/home.html'

], function( $, _, Backbone, Template ) {

  var HomeView = Backbone.View.extend({

    el: $(".view"),

    render: function() {
      
      this.$el.html( Template );

    }

  });

  return HomeView;
  
});
