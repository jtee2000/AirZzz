# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
Listing.delete_all

walsh = Listing.create({title: "Walsh Hall", description: "A building comprised of sophomores, eight-mans, and the Front Desk Pilot Project: Walsh Hall on Lower Campus, home to many late nights and sophomore bonding, is a favorite and quickly-picked building during the housing process.
Eight-man suites contain two bathrooms and a common room, offering more living space for residents to enjoy. Walsh is also centrally located—with its proximity to Corcoran Commons, the Res, the B-Line, and other residence halls, residents are able to enjoy different aspects of campus life right outside their door.
Walsh Hall is on Lower Campus and composed of four- and eight-person suites. \n\n It is the least expensive option for sophomores living on Lower Campus. If someone lives in Walsh, he or she is required to buy the meal plan since only the eight-man rooms come with a kitchenette.
The proximity to other sophomores on Lower Campus helps to create the social atmosphere that Walsh is known for around campus. Along with this comes the consequences of late nights every weekend, whether you are involved or not, due to the combination of loud music and thin walls.
According to many of Walsh’s sophomore residents, the partying can be somewhat of a double-edged sword, with its social perks but also obvious drawbacks. Life in Walsh can be, as a consequence, a tightrope act between these.
The atmosphere of having sophomores all around and a lively social scene has contributed to the installment of the Walsh Front Desk Pilot Project, where Walsh is the only building on campus that has front-desk security and police during the weekends. Residents of Walsh need to swipe in non-residents during the weekends, while any sophomores can access the building from 7 a.m. to midnight.", price: 40, guests: 4, beds: 4, bedrooms: 2, baths: 1, latitude: 42.338194, longitude: -71.165355})
fitz = Listing.create({title: "Fitzpatrick Hall", description: "So hot in the summers", price: 10, guests: 4, beds: 4, bedrooms: 1, baths: 1, latitude: 42.334530, longitude: -71.174423})
iggy = Listing.create({title: "Ignacio Hall", description: "Bust down thotiana", price: 90, guests: 6, beds: 6, bedrooms: 3, baths: 2, latitude: 42.337988, longitude: -71.169765})
vandy = Listing.create({title: "Vanderslice Hall", description: "Best sophomore housing", price: 100, guests: 8, beds: 8, bedrooms: 4, baths: 2, latitude: 3.337988, longitude: 4.169765})



walsh_1 = open('https://airzzz-seeds.s3.amazonaws.com/thomas_moore.jpg')
walsh_2 = open('https://airzzz-seeds.s3.amazonaws.com/walsh_hall.jpg')
walsh.photos.attach(io: walsh_1, filename: 'thomas_more.jpg')
