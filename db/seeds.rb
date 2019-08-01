# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

walsh = Listing.create({title: "Walsh Hall", description: "Not clean at all", price: 40, guests: 4, beds: 4, bedrooms: 2, baths: 1, latitude: 42.338194, longitude: -71.165355})
fitz = Listing.create({title: "Fitzpatrick Hall", description: "So hot in the summers", price: 10, guests: 4, beds: 4, bedrooms: 1, baths: 1, latitude: 42.334530, longitude: -71.174423})
iggy = Listing.create({title: "Ignacio Hall", description: "Bust down thotiana", price: 90, guests: 6, beds: 6, bedrooms: 3, baths: 2, latitude: 42.337988, longitude: -71.169765})


