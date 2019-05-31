class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if(@user.save)
            login!(@user)
            render :create
        else
            render json: {errors: @user.errors.full_messages}, status: 422
        end
    end

    def index #for development only
        @users = User.all
        @curr_user = current_user
        render :index
    end

    def user_params
        params.require(:user).permit(:email,:password, :profile)
    end
end

