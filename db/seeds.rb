# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"
Show.destroy_all
User.destroy_all
Genre.destroy_all

User.create(profile: "Demo", email: "email@example.com", password: "password")

videos = {}
videos[:stranger_things] = open("https://newtflix-dev.s3.amazonaws.com/Y481W8bavTg5uasHf6TzBRmD")
videos[:house_of_cards] = open("https://newtflix-dev.s3.amazonaws.com/House+of+Cards++Official+Trailer+%5BHD%5D++Netflix.mp4")

title_cards = {}
title_cards[:stranger_things] = open("https://newtflix-dev.s3.amazonaws.com/cj981Fty7duAJwHZ95VPFGex")
title_cards[:house_of_cards] = open("https://newtflix-dev.s3.amazonaws.com/house_of_cards.jpg")

shows = []
shows.push Show.create(title: "Stranger Things", year: 2017, maturity_rating: "TV-14", description: "When a young boy vanishes a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and a strange little girl")
shows.push Show.create(title: "House of Cards", year: 2018, maturity_rating: "TV-MA", description: "With Frank out of the picture, Claire Underwood steps fully into her own as the first woman president but faces formidable threats to her legacy")

genres = []
genres.push Genre.create(name: "Horror")
genres.push Genre.create(name: "Thriller")

shows[0].genres << genres[0]
shows[1].genres << genres[1]

shows[0].video.attach(io: videos[:stranger_things], filename: "stranger_things.mp4")
shows[0].title_card.attach(io: title_cards[:stranger_things], filename: "stranger_things.jpg")
shows[1].video.attach(io: videos[:house_of_cards], filename: "house_of_cards.mp4")
shows[1].title_card.attach(io: title_cards[:house_of_cards], filename: "house_of_cards.jpg")



