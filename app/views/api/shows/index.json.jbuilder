json.shows do
    @shows.each do |show|
        json.set! show.id do
            json.extract! show, :id, :title, :maturity_rating
            json.title_card_url url_for(show.title_card)
            json.genre_ids show.genres.pluck(:id)
        end
    end
end