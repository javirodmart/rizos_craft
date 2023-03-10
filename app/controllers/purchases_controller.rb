class PurchasesController < ApplicationController
  skip_before_action :authorized_user, only:[:create,:update_rating]
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

      def update_rating 
        purchases = current_user.purchases.find(params[:id])
       rating = purchases.update!(pur_parmas)
        render json: rating, status: :ok
    end
end
private
def pur_parmas
    params.permit(:user_id, :item_id,:item_rating)
end