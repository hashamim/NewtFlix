class UsersController < ApplicationController
    @user = user.find(params[:id])
    render :show
end