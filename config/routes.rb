RecipesWithBackboneJs::Application.routes.draw do
  root 'main#index'

  resources :recipes
end
