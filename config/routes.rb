Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :shows, only: [:index, :show]
    resource :list, only: [:create, :destroy]
    resources :searches, only: [:show]
  end
  resources :users, only: [:show]
  root "static_pages#root"
end
