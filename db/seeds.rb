# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"
List.destroy_all
ShowGenre.destroy_all
Show.destroy_all
User.destroy_all
Genre.destroy_all

demo = User.create(profile: "Demo", email: "email@example.com", password: "password")

videos = {}
videos[:stranger_things] = open("https://newtflix-dev.s3.amazonaws.com/Stranger_Things_Season_1_Trailer.mp4")
videos[:house_of_cards] = open("https://newtflix-dev.s3.amazonaws.com/House+of+Cards++Official+Trailer+%5BHD%5D++Netflix.mp4")
videos[:avengers] = open("https://newtflix-dev.s3.amazonaws.com/Marvel+Studios+Avengers+Infinity+War+Official+Trailer.mp4")
videos[:thor] = open("https://newtflix-dev.s3.amazonaws.com/Thor+Ragnarok+Official+Trailer.mp4")
videos[:john_wick] = open("https://newtflix-dev.s3.amazonaws.com/John+Wick+(2014)+-+Official+Trailer+-+Keanu+Reeves.mp4")
videos[:one_punch_man] = open("https://newtflix-dev.s3.amazonaws.com/One+Punch+Man+-+Official+Trailer.mp4")
videos[:bojack] = open("https://newtflix-dev.s3.amazonaws.com/BoJack+Horseman++Official+Trailer+%5BHD%5D++Netflix.mp4")
videos[:office] = open("https://newtflix-dev.s3.amazonaws.com/The+Office+TV+Series+2005+Season+1+Trailer.mp4")
videos[:arrested] = open("https://newtflix-dev.s3.amazonaws.com/Arrested+Development+-+Season+4++Official+Trailer+%5BHD%5D++Netflix.mp4")
videos[:it] = open("https://newtflix-dev.s3.amazonaws.com/IT+CHAPTER+TWO+-+Official+Teaser+Trailer+%5BHD%5D.mp4")
videos[:toystory] = open("https://newtflix-dev.s3.amazonaws.com/Toy+Story+4++Official+Trailer.mp4")
videos[:aladdin] = open("https://newtflix-dev.s3.amazonaws.com/%F0%9F%8E%A5+ALADDIN+(1992)++Full+Movie+Trailer+in+HD++1080p.mp4")
videos[:us] = open("https://newtflix-dev.s3.amazonaws.com/Us+-+Official+Trailer+%5BHD%5D.mp4")
videos[:quiet] = open("https://newtflix-dev.s3.amazonaws.com/A+Quiet+Place+(2018)+-+Official+Trailer+-+Paramount+Pictures.mp4")
videos[:getout] = open("https://newtflix-dev.s3.amazonaws.com/Get+Out+-+In+Theaters+This+February+-+Official+Trailer.mp4")
videos[:lionking] = open("https://newtflix-dev.s3.amazonaws.com/The+Lion+King+Theatrical+Trailer+(1994).mp4")
title_cards = {}
title_cards[:stranger_things] = open("https://newtflix-dev.s3.amazonaws.com/stranger_things.jpeg")
title_cards[:house_of_cards] = open("https://newtflix-dev.s3.amazonaws.com/house_of_cards.jpg")
title_cards[:avengers] = open("https://newtflix-dev.s3.amazonaws.com/Avengers-Infinity-War-Movie-Poster-Marvel-Comics-Canvas-painting-Superheroes-Alliance-Sci-fi-Film-Prints-Wall.jpeg_640x640.jpeg")
title_cards[:thor] = open("https://newtflix-dev.s3.amazonaws.com/thor-ragnarok-poster.jpg")
title_cards[:john_wick] = open("https://newtflix-dev.s3.amazonaws.com/johnwick2-3.jpg")
title_cards[:one_punch_man] = open("https://newtflix-dev.s3.amazonaws.com/one-punch-man.jpg")
title_cards[:bojack] = open("https://newtflix-dev.s3.amazonaws.com/bojack-horseman-poster.jpg")
title_cards[:office] = open("https://newtflix-dev.s3.amazonaws.com/the-office-poster.jpg")
title_cards[:arrested] = open("https://newtflix-dev.s3.amazonaws.com/Watch-Arrested-Development-Online.jpg")
title_cards[:it] = open("https://newtflix-dev.s3.amazonaws.com/it.jpg")
title_cards[:toystory] = open("https://newtflix-dev.s3.amazonaws.com/toystory4.jpg")
title_cards[:aladdin] = open("https://newtflix-dev.s3.amazonaws.com/aladdin.jpg")
title_cards[:us] = open("https://newtflix-dev.s3.amazonaws.com/us.jpg")
title_cards[:quiet] = open("https://newtflix-dev.s3.amazonaws.com/aquietplace.jpg")
title_cards[:getout] = open("https://newtflix-dev.s3.amazonaws.com/getout.jpeg")
title_cards[:lionking] = open("https://newtflix-dev.s3.amazonaws.com/lionking.jpg")


stranger_things =  Show.create(title: "Stranger Things", year: 2017, maturity_rating: "TV-14", description: "When a young boy vanishes a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl")
house_cards =  Show.create(title: "House of Cards", year: 2018, maturity_rating: "TV-MA", description: "With Frank out of the picture, Claire Underwood steps fully into her own as the first woman president but faces formidable threats to her legacy")
avengers =  Show.create(title: "Avengers: Infinity War", year: 2018, maturity_rating: "PG-13", description: "Superheroes amass to prevent intergalactic sociopath Thanos from acquiring a full set of infinity stones and wiping out half of all life in the universe")
thor =  Show.create(title: "Thor: Ragnarok", year: 2017, maturity_rating: "PG-13", description: "To save Asgard from from a bloodthirsty goddess of death the mighty Thor will have to battle his way to freedom and find a way back home")
john_wick =  Show.create(title: "John Wick", year: 2014, maturity_rating: "R", description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.")
one_punch_man =  Show.create(title: "One Punch Man", year: 2019, maturity_rating: "TV-PG", description: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.")
bojack =  Show.create(title: "Bojack Horseman", year: 2019, maturity_rating: "TV-MA", description: "BoJack Horseman was the star of the hit TV show \"Horsin' Around\" in the '90s, now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.")
office =  Show.create(title: "The Office", year: 2013, maturity_rating: "TV-PG", description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.")
it_show =  Show.create(title: "It", year: 2017, maturity_rating: "R", description: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.")
arrested = Show.create(title: "Arrested Development", year: 2018, maturity_rating: "TV-14", description: "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.")
aladdin = Show.create(title: "Aladdin", year: 1992, maturity_rating: "G", description: "A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.")
toystory = Show.create(title: "Toy Story 4", year: 2019, maturity_rating: "G", description: "When a new toy called \"Forky\" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.")
us = Show.create(title: "Us", year: 2019, maturity_rating: "R", description: "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.")
quiet = Show.create(title: "A Quiet Place", year: 2019, maturity_rating: "Pg-13", description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.")
getout = Show.create(title: "Get Out", year: 2017, maturity_rating: "R", description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.")
lionking = Show.create(title: "Lion King", year: 1994, maturity_rating: "G", description: "To survive and grow into a powerful adult lion, Simba must perfect his savage pounce and master fighting with all four paws. Scrap with hyenas, dash through an elephant grave-yard, defeat your evil uncle Scar and recapture the Pridelands.")

genres = Genre.create([{name: "Action"}, {name: "Comedy"},{name: "Horror"},{name: "Disney"},{name: "Thriller"},{name: "Animation"}])
genres.push(Genre.create(name: "TV Shows"))
genres[0].shows << stranger_things
genres[0].shows << avengers
genres[0].shows << thor
genres[0].shows << john_wick
genres[0].shows << one_punch_man

genres[1].shows << one_punch_man
genres[1].shows << bojack
genres[1].shows << office
genres[1].shows << house_cards
genres[1].shows << arrested

genres[2].shows << it_show
genres[2].shows << stranger_things
genres[2].shows << us
genres[2].shows << quiet
genres[2].shows << getout

genres[3].shows << avengers
genres[3].shows << thor
genres[3].shows << toystory
genres[3].shows << aladdin
genres[3].shows << lionking

genres[4].shows << john_wick
genres[4].shows << house_cards
genres[4].shows << us
genres[4].shows << quiet
genres[4].shows << getout

genres[5].shows << one_punch_man
genres[5].shows << toystory
genres[5].shows << aladdin
genres[5].shows << bojack
genres[5].shows << lionking


# demo.shows << genres[0].shows
# demo.shows << genres[1].shows

stranger_things.video.attach(io: videos[:stranger_things], filename: "stranger_things.mp4")
stranger_things.title_card.attach(io: title_cards[:stranger_things], filename: "stranger_things.jpg")
house_cards.video.attach(io: videos[:house_of_cards], filename: "house_of_cards.mp4")
house_cards.title_card.attach(io: title_cards[:house_of_cards], filename: "house_of_cards.jpg")
avengers.video.attach(io: videos[:avengers], filename: "avengers.mp4")
avengers.title_card.attach(io: title_cards[:avengers], filename: "avengers.jpg")
thor.video.attach(io: videos[:thor], filename: "thor.mp4")
thor.title_card.attach(io: title_cards[:thor], filename: "thor.jpg")
john_wick.video.attach(io: videos[:john_wick], filename: "john_wick.mp4")
john_wick.title_card.attach(io: title_cards[:john_wick], filename: "john_wick.jpg")
one_punch_man.video.attach(io: videos[:one_punch_man], filename: "one_punch_man.mp4")
one_punch_man.title_card.attach(io: title_cards[:one_punch_man], filename: "one_punch_man.jpg")
office.video.attach(io: videos[:office], filename: "office.mp4")
office.title_card.attach(io: title_cards[:office], filename: "office.jpg")
bojack.video.attach(io: videos[:bojack], filename: "bojack.mp4")
bojack.title_card.attach(io: title_cards[:bojack], filename: "bojack.jpg")
it_show.video.attach(io: videos[:it], filename: "it_show.mp4")
it_show.title_card.attach(io: title_cards[:it], filename: "it_show.jpg")
arrested.video.attach(io: videos[:arrested], filename: "arrested.mp4")
arrested.title_card.attach(io: title_cards[:arrested], filename: "arrested.jpg")
toystory.video.attach(io: videos[:toystory], filename: "toystory.mp4")
toystory.title_card.attach(io: title_cards[:toystory], filename: "toystory.jpg")
aladdin.video.attach(io: videos[:aladdin], filename: "aladdin.mp4")
aladdin.title_card.attach(io: title_cards[:aladdin], filename: "aladdin.jpg")
us.video.attach(io: videos[:us], filename: "us.mp4")
us.title_card.attach(io: title_cards[:us], filename: "us.jpg")
quiet.video.attach(io: videos[:quiet], filename: "quiet.mp4")
quiet.title_card.attach(io: title_cards[:quiet], filename: "quiet.jpg")
getout.video.attach(io: videos[:getout], filename: "getout.mp4")
getout.title_card.attach(io: title_cards[:getout], filename: "getout.jpg")
lionking.video.attach(io: videos[:lionking], filename: "lionking.mp4")
lionking.title_card.attach(io: title_cards[:lionking], filename: "lionking.jpg")
