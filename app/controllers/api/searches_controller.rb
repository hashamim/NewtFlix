class Api::SearchesController < ApplicationController
    def show
        
        if params[:id] == ""
            @shows = []
        else
            str = "%#{params[:id]}%"
            @shows = Show
                .joins("LEFT OUTER JOIN show_genres ON show_genres.show_id = shows.id")
                .joins("LEFT OUTER JOIN genres ON show_genres.genre_id = genres.id")
                .joins("LEFT OUTER JOIN castings ON castings.show_id = shows.id")
                .joins("LEFT OUTER JOIN actors ON castings.actor_id = actors.id")
                .where("UPPER(genres.name) LIKE UPPER(:query) OR UPPER(actors.name) LIKE UPPER(:query) OR UPPER(shows.title) LIKE UPPER(:query)", query: str)
            @shows = @shows.uniq
        end
        render :show
    end
end