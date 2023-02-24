class ItemsController < ApplicationController
    def index
        render json: Item.all
    end
    


    def create
        item = Item.create(item_parmas)
        render json: item, status: :created
    end

    def destroy 
        item = Item.find(params[:id])
        item.destroy
        head :no_content
    end

    private
    
    def item_parmas
        params.permit(:name, :price, :img_url, :description)
    end
end