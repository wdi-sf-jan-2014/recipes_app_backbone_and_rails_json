class RecipesController < ApplicationController
  respond_to :json

  def index
    respond_with(Recipes.all)
  end
end
