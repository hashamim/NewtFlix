class Api::ListsController < ApplicationController
    def create
        @list = List.new(user_id: current_user[:id], show_id: params[:show_id])
        if @list.save
            render json: {show_id: @list[:show_id]}
        else
            render json: {message: "Show does not exist or is already on list"}, status: 422
        end
    end

    def destroy
        if list = List.find_by(user_id: current_user[:id], show_id: params[:show_id])
            list.destroy
            render json: {success: true}
        else
            render json: {message: "Show not on list"}, status: 422
        end
    end
end