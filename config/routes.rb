Rails.application.routes.draw do
  resources :purchases
  resources :charges
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
  get "/home/carts", to: "carts#show"
  get "/total/:id", to: "carts#total"
  get "/user_carts/:id", to: "carts#user_carts"
  get "/user_purchases/:id", to: "purchases#user_purchase"

  post "/products", to: "charges#create_products"
  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  patch "/users/:id/update_rating/:id", to: "purchases#update_rating"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
