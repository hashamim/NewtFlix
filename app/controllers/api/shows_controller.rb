class Api::ShowsController < ApplicationController
    def index
        @genres = Genre.all.includes(:shows)
        render :index
    end

    def show
        @show = Show.find_by(id: params[:id])
        render :show
    end
end