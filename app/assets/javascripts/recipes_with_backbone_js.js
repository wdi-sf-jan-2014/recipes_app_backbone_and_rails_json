window.RecipesWithBackboneJs = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.router = new RecipesWithBackboneJs.Routers.Recipes(); 
    Backbone.history.start({pushState: true}); 
  }
};

$(document).ready(function(){
  RecipesWithBackboneJs.initialize();
});
