class CartsController < ApplicationController
  def index
    render json: Cart.all
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
    cart.destroy
    head :no_content
  end

  

end


private
def cart_params
    params.permit(:user_id,:item_id)
end