class UsersController < ApplicationController
   def show
    user = User.find(params[:id])
    render json: user , status: :ok
   end
   def total_price
    user = User.find(params[:id])
     price = user.items.sum(:price).round(2)
    render json: price ,status: :ok
  end

end
