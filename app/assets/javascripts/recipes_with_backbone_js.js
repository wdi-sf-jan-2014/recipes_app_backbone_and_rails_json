window.RecipesWithBackboneJs = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new RecipesWithBackboneJs.Routers.Recipes(); 
    Backbone.history.start({pushState: true}); 
  }
};

$(document).ready(function(){
  RecipesWithBackboneJs.initialize();
});
