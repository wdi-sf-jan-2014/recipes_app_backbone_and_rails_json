RecipesWithBackboneJs.Routers.Recipes = Backbone.Router.extend({
  routes: { 
    '': 'index'
  },

  index: function() {
    var view = new RecipesWithBackboneJs.Views.RecipesIndex();
    $('#container').html(view.render().el);
  }
});
