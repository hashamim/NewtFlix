class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if(@user.save)
            login!(@user)
            render :create
        else
            render json: {errors: @user.errors.full_messages}, status: 420
        end
    end

    def index #for development only
        @users = User.all
        render :index
    end

    def user_params
        params.require(:user).permit(:email,:password)
    end
end

