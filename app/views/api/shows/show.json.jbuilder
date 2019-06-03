json.shows do
    json.set! @show.id do
        json.extract! @show, :id, :title, :maturity_rating, :description
        json.title_card_url url_for(@show.title_card)
        json.genre_ids @show.genres.pluck(:id)
        json.actor_ids @show.actors.pluck(:id)
    end
end

json.genres do
    @show.genres.each do |genre|
        json.set! genre.id do
            json.extract! genre, :id, :name
            json.show_ids genre.shows.pluck(:id)
        end
    end
end

json.actors do
    @show.actors.each do |actor|
        json.set! actor.id do
            json.extract! actor, :id, :name
            json.show_ids actor.shows.pluck(:id)
        end
    end
end