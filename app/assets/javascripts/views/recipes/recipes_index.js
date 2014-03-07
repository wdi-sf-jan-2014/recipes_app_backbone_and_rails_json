RecipesWithBackboneJs.Views.RecipesIndex = Backbone.View.extend({

  template: HandlebarsTemplates['recipes/index'],

  events: {
    'submit #new_recipe': 'create_recipe'
  },

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    $(this.el).html(this.template({ recipes: this.collection.toJSON() }));
    return this;
  },

  create_recipe: function(event) {
    event.preventDefault();
  }

});
