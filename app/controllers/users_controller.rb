class UsersController < ApplicationController
  
  skip_before_action :authorized_user, only:[:create]
    def index
        render  json: User.all
    end
    def show
        render json: current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def total_price
     user = User.find(params[:id])
      price = user.items.sum(:price).round(2)
     render json: price ,status: :ok
   end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :email,:password, :password_confirmation)
    end


end
