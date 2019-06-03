class Api::ShowsController < ApplicationController
    def index
        @shows = Show.all.includes(:genres)
        render :index
    end

    def show
        @show = Show.find_by(id: params[:id])
        render :show
    end
end