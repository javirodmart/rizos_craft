Rails.application.routes.draw do
  resources :carts
  resources :items
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/authorized_user', to: 'users#show'
  get '/loginWines' , to: 'sessions#index'
  get "/all_items", to: "carts#all_items"
  get "/total_price",to: "users#total_price"
 

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

end
