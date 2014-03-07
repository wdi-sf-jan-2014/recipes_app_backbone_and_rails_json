RecipesWithBackboneJs.Routers.Recipes = Backbone.Router.extend({
  routes: { 
    'recipes': 'index',
  },

  initialize: function() {
    this.collection = new RecipesWithBackboneJs.Collections.Recipes();
    this.collection.fetch();
  },

  index: function() {
    var view = new RecipesWithBackboneJs.Views.RecipesIndex(
      { collection: this.collection }
    );

    $('#container').html(view.render().el);
  }
});
