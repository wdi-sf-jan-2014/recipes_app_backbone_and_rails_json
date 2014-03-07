RecipesWithBackboneJs.Collections.Recipes = Backbone.Collection.extend({

  url: '/api/recipes',
  model: RecipesWithBackboneJs.Models.Recipe

});
