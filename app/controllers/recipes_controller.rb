class RecipesController < ApplicationController
  respond_to :json

  def index
    respond_with Recipe.all
  end

  def create
    respond_with Recipe.create(recipe_params)
  end

private

  def recipe_params
    params.require(:recipe).permit(:name, :description)
  end
end
