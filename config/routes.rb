Rails.application.routes.draw do
  get "/", to: 'static_pages#root'
  get "/users", to: 'static_pages#root'
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
  end
end
