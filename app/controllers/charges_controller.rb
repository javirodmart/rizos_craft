class ChargesController < ApplicationController
    skip_before_action :authorized_user, only:[:create,:index]
    def create
      # product = Item.find(params[:id])
      #   session =  @session =  Stripe::Checkout::Session.create({
      #   customer: current_user.stripe_customer_id,
      #   payment_method_types:['card'],
      #   line_items:[{
      #       price_data: {
      #           currency: 'usd',
      #           unit_amount: product.price * 100,
      #           product_data: {
      #           name: product.name,
      #           description: product.name,
      #           },
      #         },
      #         quantity: 1,
            
      #   }],
      #   expand: ['customer'],
      #   mode: 'payment',
      #   success_url: "http://localhost:4000/items",
      #   cancel_url:'http://localhost:4000/items',
      #  })


    
       

        payment_intent = Stripe::PaymentIntent.create(
            amount: current_user.carts.sum(:price) * 100,
            currency: 'usd',
            description: current_user.carts.pluck(:name).to_s,
            automatic_payment_methods: {
              enabled: true,
            },
            
            customer: current_user.stripe_customer_id,
            shipping: {
              name:current_user.first_name && current_user.last_name,
              address:{
                city:current_user.city,
                line1:current_user.line1,
                line2:current_user.line2,
                postal_code:current_user.postal_code
              }
            }
          )
       

       render json: payment_intent
    end


end
