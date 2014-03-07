RecipesWithBackboneJs.Views.RecipesIndex = Backbone.View.extend({

  template: HandlebarsTemplates['recipes/index'],

  render: function() {
    $(this.el).html(this.template());
    return this;
  }

});
