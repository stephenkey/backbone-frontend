define([

  'underscore',
  'backbone',
  'models/item'

], function( _, Backbone, Item ) {

  var RecipientsCollection = Backbone.Collection.extend({
      
      model: Item,

      initialize : function(models, options) {},
      
      url : function() {
        return '';
      }   
     
  });

  return RecipientsCollection;

});