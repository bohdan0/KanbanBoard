Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :sessions, only: [:create, :destroy]
    resources :lists, only: [:index, :show, :create, :update, :destroy]
    resources :tasks, only: [:index, :show, :create, :update, :destroy]
  end
end
