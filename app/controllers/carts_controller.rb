class CartsController < ApplicationController

  def index
    render json: Cart.find(params[:user_id])
end

  def show
    cart = Cart.find(params[:id])
    render json: cart,status: :ok
  end
  
  def create
    cart = Cart.create(cart_params)
    render json: cart, status: :created
  end

  def destroy
    cart = Cart.find(params[:id])
    cart.delete
    head :no_content
  end

  def total 
    user = User.find(params[:id])
    user_total = user.carts.sum(:price)
    render json: user_total, status: :ok
  end
  def user_carts
    user = User.find(params[:id])
    user_carts =  User.find(params[:id]).carts
    render json: user_carts, status: :ok

  end

end


private
def cart_params
    params.permit(:user_id,:item_id,:name,:price, :img_url,:description, :stripe_price_id , :stripe_product_id)
end