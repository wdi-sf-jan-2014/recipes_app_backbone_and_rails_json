RecipesWithBackboneJs::Application.routes.draw do
  root 'main#index'

  scope 'api' do
    resources :recipes
  end

  get '*any', to: 'main#index'
end
