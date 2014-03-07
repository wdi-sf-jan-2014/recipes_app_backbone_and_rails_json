RecipesWithBackboneJs.Views.RecipesIndex = Backbone.View.extend({
  template: HandlebarsTemplates['recipes/index'],

  events: {
    'submit #new_recipe': 'create_recipe'
  },

  initialize: function() {
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
      success: function() {
        return $('#new_recipe')[0].reset();
      }
    });
  }

});
