class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

    before_action :authorized_user
def current_user
    user = User.find_by(id: session[:user_id])
end

def authorized_user
    render json:{errors:"Not Authorized"}, status: :unauthorized unless current_user
    end
private

def not_found(invalid)
    render json: {errors: "#{invalid.model} not found"}, status: :not_found
end

def unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end


end
