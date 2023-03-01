class ChargesController < ApplicationController
    skip_before_action :authorized_user, only:[:create,:index]
    def create
        product = Item.find(params[:id])
        session =  @session =  Stripe::Checkout::Session.create({
        customer: current_user.stripe_customer_id,
        payment_method_types:['card'],
        line_items:[{
            price_data: {
                currency: 'usd',
                unit_amount: product.price * 100,
                product_data: {
                name: product.name,
                description: product.description,
                },
              },
              quantity: 1,
        }],
        mode: 'payment',
        success_url: "http://localhost:4000/items",
        cancel_url:'http://localhost:4000/items',
       })


       def intent 


        payment_intent = Stripe::PaymentIntent.create(
            amount: calculate_order_amount(data['items']),
            currency: 'usd',
            automatic_payment_methods: {
              enabled: true,
            },
          )
       end

       render json: session
    end


end
