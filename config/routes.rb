Rails.application.routes.draw do
  get "/", to: 'static_pages#root'
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :index]
  end
end
