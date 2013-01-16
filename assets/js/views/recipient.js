define([

  'jquery',
  'underscore',
  'backbone',
  'models/item',
  'text!templates/recipient.html'

], function( $, _, Backbone, Item, Template ) {

  var RecipientView = Backbone.View.extend({

    el: $(".view"),

    render: function() {

      var recipient = {
        id: "123456",
        first_name: "Person",
        last_name: "Name",
        age: "25",
        gender: "male",
        image: "default",
        organization: {
          id: "321045",
          name: "Organization Name",
          address1: "123 Example Road",
          address2: "",
          city: "Okalhoma City",
          state: "OK",
          zip: "73165",
          country: "US"
        },
        facility: {
          id: "765432",
          name: "Facility Name",
          latitude: "35.461844",
          longitude: "-97.493019",
          address1: "123 Example Road",
          address2: "",
          city: "Okalhoma City",
          state: "OK",
          zip: "73165",
          country: "US"
        },
        items: {
          0: { title: "Item One", price: "25.00" },
          1: { title: "Item Two", price: "21.00" },
          2: { title: "Item Three", price: "18.00" }
        },
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
        content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. \n Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. \n Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
        date: "12-25-2012"
      }

      var data = {
        r: recipient
      };

      var compiledTemplate = _.template( Template, data );
      this.$el.html( compiledTemplate );

    }

  });

  return RecipientView;
  
});