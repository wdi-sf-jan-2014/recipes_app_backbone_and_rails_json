RecipesWithBackboneJs.Views.RecipesIndex = Backbone.View.extend({

  template: HandlebarsTemplates['recipes/index'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    $(this.el).html(this.template({ recipes: this.collection }));
    return this;
  }

});
