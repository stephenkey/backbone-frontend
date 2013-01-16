define([

  'underscore',
  'backbone',

], function( _, Backbone ) {

  var Item = Backbone.Model.extend({

    urlRoot: '/backbone-frontend/items/'

  });

	return Item;

});