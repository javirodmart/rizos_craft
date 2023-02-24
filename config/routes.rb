Rails.application.routes.draw do
  resources :carts
  resources :items
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/all_items", to: "carts#all_items"
  get "/total_price/:id",to: "users#total_price"
end
