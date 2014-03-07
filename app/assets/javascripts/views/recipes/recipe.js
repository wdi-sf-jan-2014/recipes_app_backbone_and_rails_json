RecipesWithBackboneJs.Views.Recipe = Backbone.View.extend({
  tagName: 'li',

  template: HandlebarsTemplates['recipes/recipe'],

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  }
});
