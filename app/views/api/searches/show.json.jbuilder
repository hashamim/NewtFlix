json.shows do
    @shows.each do |show|
        json.set! show.id do
        json.extract! show, :id, :title, :maturity_rating
        json.title_card_url url_for(show.title_card)
        end
    end
end