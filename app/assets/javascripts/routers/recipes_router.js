RecipesWithBackboneJs.Routers.Recipes = Backbone.Router.extend({
  routes: { 
    'recipes': 'index',
    'recipes/:id': 'show'
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
  },

  show: function(id) {
    var recipe_id = parseInt(id, 10), recipe;
    var self = this; 
    this.collection.fetch({
      success: function () {
        recipe = self.collection.get(recipe_id);
        var view = new RecipesWithBackboneJs.Views.Recipe(
          { model: recipe }
        );
        $('#container').html(view.render().el);
      }
    });
  }
});
