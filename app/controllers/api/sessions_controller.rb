class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(user_params[:email] ,user_params[:password])
        if @user
            login!(@user)
            render '/api/users/create'
        else
            if User.find_by(id: user_params[:id])
                render json: {errors: ["Invalid password"]}, status: 422
            else
                render(
                    json: {
                        errors: ["Sorry, we can't find an account with this email address. Please try again or create a new account."]
                    }, 
                    status: 422)
            end
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {text: "logged out"}
        else
            render json: {errors: ["error logging out"]}, status: 422
        end
    end

    def user_params
        params.require(:user).permit(:email,:password, :profile)
    end
end