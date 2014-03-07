RecipesWithBackboneJs.Routers.Recipes = Backbone.Router.extend({
  routes: { 
    'recipes': 'index'
  },

  index: function() {
    var view = new RecipesWithBackboneJs.Views.RecipesIndex();
    $('#container').html(view.render().el);
  }
});
