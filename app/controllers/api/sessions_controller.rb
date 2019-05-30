class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(user_params[:email] ,user_params[:password])
        if @user
            login!(@user)
            render '/api/users/create'
        else
            render json: {errors: ["Invalid Username or Password"]}, status: 420
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {text: "logged out"}
        else
            render json: {errors: ["error logging out"]}, status: 420
        end
    end

    def user_params
        params.require(:user).permit(:email,:password, :profile)
    end
end