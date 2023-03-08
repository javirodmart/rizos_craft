class PurchasesController < ApplicationController
    def index 
        render json: Purchase.all
    end
    def create
        purchases = Purchase.create!(pur_parmas)
        render json: purchases, status: :created
      end

      def user_purchase 
        purchases = User.find(params[:id]).purchases
        render json: purchases, status: :ok
      end
end
private
def pur_parmas
    params.permit(:user_id, :item_id)
end