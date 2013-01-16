define([

  'underscore',
  'backbone',

], function( _, Backbone ) {

  var Item = Backbone.Model.extend({

    urlRoot: '/items/'

  });

	return Item;

});