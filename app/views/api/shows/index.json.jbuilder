show_set = Hash.new(false)
show_arr = []
json.genres do
    @genres.each do |genre|
        json.set! genre.id do
            json.extract! genre, :id, :name
            shows_in_genre = genre.shows
            json.show_ids shows_in_genre.pluck(:id)
            shows_in_genre.each do |show|
                if show_set[show] == false
                    show_set[show] = true
                    show_arr.push(show)
                end
            end
        end
    end
end
json.shows do
    show_arr.each.with_index do |show, ind|
        json.set! show.id do
        json.extract! show, :id, :title, :maturity_rating
        if ind == 0
            json.extract! show, :description
            json.video_url = url_for(show.video)
        end
        json.title_card_url url_for(show.title_card)
        json.genre_ids show.genres.pluck(:id)
        end
    end
end