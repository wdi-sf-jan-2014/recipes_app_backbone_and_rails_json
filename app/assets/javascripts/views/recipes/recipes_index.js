RecipesWithBackboneJs.Views.RecipesIndex = Backbone.View.extend({
  template: HandlebarsTemplates['recipes/index'],

  events: {
    'submit #new_recipe': 'create_recipe'
  },

  initialize: function() {
    _.bindAll(this, 'create_recipe_success');
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.render_recipe, this);
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.each(this.render_recipe);
    return this;
  },

  render_recipe: function(recipe) {
    var view = new RecipesWithBackboneJs.Views.Recipe({ model: recipe });
    this.$('.recipes').append(view.render().el); 
  },

  create_recipe: function(event) {
    event.preventDefault();
    this.collection.create({ 
      name: $('#new_recipe #name').val(), 
      description: $('#new_recipe #description').val() 
    }, {
      wait: true,
      success: this.create_recipe_success
    });
  },

  create_recipe_success: function(recipe, response, options) {
    $('#new_recipe')[0].reset();
    RecipesWithBackboneJs.router.navigate('recipes/' + recipe.get('id'));
  }

});
