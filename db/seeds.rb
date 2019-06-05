# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"
ShowGenre.destroy_all
Show.destroy_all
User.destroy_all
Genre.destroy_all

User.create(profile: "Demo", email: "email@example.com", password: "password")

videos = {}
videos[:stranger_things] = open("https://newtflix-dev.s3.amazonaws.com/Y481W8bavTg5uasHf6TzBRmD")
videos[:house_of_cards] = open("https://newtflix-dev.s3.amazonaws.com/House+of+Cards++Official+Trailer+%5BHD%5D++Netflix.mp4")
videos[:avengers] = open("https://newtflix-dev.s3.amazonaws.com/Marvel+Studios+Avengers+Infinity+War+Official+Trailer.mp4")
videos[:thor] = open("https://newtflix-dev.s3.amazonaws.com/Thor+Ragnarok+Official+Trailer.mp4")
videos[:john_wick] = open("https://newtflix-dev.s3.amazonaws.com/John+Wick+(2014)+-+Official+Trailer+-+Keanu+Reeves.mp4")
videos[:one_punch_man] = open("https://newtflix-dev.s3.amazonaws.com/One+Punch+Man+-+Official+Trailer.mp4")
videos[:bojack] = open("https://newtflix-dev.s3.amazonaws.com/BoJack+Horseman++Official+Trailer+%5BHD%5D++Netflix.mp4")
videos[:office] = open("https://newtflix-dev.s3.amazonaws.com/The+Office+TV+Series+2005+Season+1+Trailer.mp4")

title_cards = {}
title_cards[:stranger_things] = open("https://newtflix-dev.s3.amazonaws.com/cj981Fty7duAJwHZ95VPFGex")
title_cards[:house_of_cards] = open("https://newtflix-dev.s3.amazonaws.com/house_of_cards.jpg")
title_cards[:avengers] = open("https://newtflix-dev.s3.amazonaws.com/Avengers-Infinity-War-Movie-Poster-Marvel-Comics-Canvas-painting-Superheroes-Alliance-Sci-fi-Film-Prints-Wall.jpeg_640x640.jpeg")
title_cards[:thor] = open("https://newtflix-dev.s3.amazonaws.com/thor-ragnarok-poster.jpg")
title_cards[:john_wick] = open("https://newtflix-dev.s3.amazonaws.com/johnwick2-3.jpg")
title_cards[:one_punch_man] = open("https://newtflix-dev.s3.amazonaws.com/one-punch-man.jpg")
title_cards[:bojack] = open("https://newtflix-dev.s3.amazonaws.com/bojack-horseman-poster.jpg")
title_cards[:office] = open("https://newtflix-dev.s3.amazonaws.com/the-office-poster.jpg")

stranger_things =  Show.create(title: "Stranger Things", year: 2017, maturity_rating: "TV-14", description: "When a young boy vanishes a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl")
house_cards =  Show.create(title: "House of Cards", year: 2018, maturity_rating: "TV-MA", description: "With Frank out of the picture, Claire Underwood steps fully into her own as the first woman president but faces formidable threats to her legacy")
avengers =  Show.create(title: "Avengers: Infinity War", year: 2018, maturity_rating: "PG-13", description: "Superheroes amass to prevent intergalactic sociopath Thanos from acquiring a full set of infinity stones and wiping out half of all life in the universe")
thor =  Show.create(title: "Thor: Ragnarok", year: 2017, maturity_rating: "PG-13", description: "To save Asgard from from a bloodthirsty goddess of death the mighty Thor will have to battle his way to freedom and find a way back home")
john_wick =  Show.create(title: "John Wick", year: 2014, maturity_rating: "R", description: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.")
one_punch_man =  Show.create(title: "One Punch Man", year: 2019, maturity_rating: "TV-PG", description: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.")
bojack =  Show.create(title: "Bojack Horseman", year: 2019, maturity_rating: "TV-MA", description: "BoJack Horseman was the star of the hit TV show \"Horsin' Around\" in the '90s, now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.")
office =  Show.create(title: "The Office", year: 2013, maturity_rating: "TV-PG", description: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.")
friends = "FILL IN LATER"
arrested = "FILL IN LATER"

genres = Genre.create([{name: "Action"}, {name: "Comedy"},{name: "Horror"},{name: "Disney"},{name: "Thriller"},{name: "Animation"}])

genres[0].shows << stranger_things
genres[0].shows << avengers
genres[0].shows << thor
genres[0].shows << john_wick
genres[0].shows << one_punch_man

genres[1].shows << one_punch_man
genres[1].shows << bojack
genres[1].shows << office

genres[1].shows << house_cards


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
