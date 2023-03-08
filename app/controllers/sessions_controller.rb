class SessionsController < ApplicationController
    skip_before_action :authorized_user, only:[:create]

    def index
        render json: User.all,except: [:created_at, :updated_at]
    end


    def create
        user = User.find_by(email:params[:email])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
        else
            render json: {errors: "Incorrect Username or Password"}, status: :unauthorized
        end

        
    end
    def destroy
        session.delete :user_id
        head :no_content
    end
end
