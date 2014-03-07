class RecipesController < ApplicationController
  respond_to :json

  def index
    respond_with(Recipe.all)
  end
end
