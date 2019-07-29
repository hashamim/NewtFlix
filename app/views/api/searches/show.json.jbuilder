show_ids = []
json.shows do
    @shows.each do |show|
        show_ids.push(show.id)
        json.set! show.id do
        json.extract! show, :id, :title, :maturity_rating
        json.title_card_url url_for(show.title_card)
        end
    end
end
if @shows.empty?
        json.shows Hash.new()
    end
json.search_ids show_ids