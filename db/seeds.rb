# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
Listing.delete_all
User.delete_all 
Booking.delete_all

walsh = Listing.create({title: "Walsh Hall", description: "A building comprised of sophomores, eight-mans, and the Front Desk Pilot Project: Walsh Hall on Lower Campus, home to many late nights and sophomore bonding, is a favorite and quickly-picked building during the housing process.
Eight-man suites contain two bathrooms and a common room, offering more living space for residents to enjoy. Walsh is also centrally located—with its proximity to Corcoran Commons, the Res, the B-Line, and other residence halls, residents are able to enjoy different aspects of campus life right outside their door.
Walsh Hall is on Lower Campus and composed of four- and eight-person suites. \n\n It is the least expensive option for sophomores living on Lower Campus. If someone lives in Walsh, he or she is required to buy the meal plan since only the eight-man rooms come with a kitchenette.
The proximity to other sophomores on Lower Campus helps to create the social atmosphere that Walsh is known for around campus. Along with this comes the consequences of late nights every weekend, whether you are involved or not, due to the combination of loud music and thin walls.
According to many of Walsh’s sophomore residents, the partying can be somewhat of a double-edged sword, with its social perks but also obvious drawbacks. Life in Walsh can be, as a consequence, a tightrope act between these.
The atmosphere of having sophomores all around and a lively social scene has contributed to the installment of the Walsh Front Desk Pilot Project, where Walsh is the only building on campus that has front-desk security and police during the weekends. Residents of Walsh need to swipe in non-residents during the weekends, while any sophomores can access the building from 7 a.m. to midnight.", price: 40, guests: 4, beds: 4, bedrooms: 2, baths: 1, latitude: 42.338194, longitude: -71.165355})
fitz = Listing.create({title: "Fitzpatrick Hall", description: "All maintenance issues including furnishings, pest control, and lock/combo changes should be submitted online via the Agora Portal. Please be sure to include the phone number at which you may be reached and a detailed description of the issue. If the request for repair is deemed malicious damage, appropriate charges will be added to your account and judicial sanctioning will be determined. All emergencies, such as leaks, flooding, no heat, broken locks, or combination pads, should be immediately called into the Facilities Service Center at 617-552-3048. If Facilities is closed, please call the BCPD at 617-552-4444.

Room and Apartment Furnishings:

Each room is assigned a set number of pieces of furniture. All furnishings assigned to your room must remain in your room. We do not have space to store furniture you do not want. Furniture may be moved within your assigned room only and must returned to its original position before check-out. Furnishings may not be moved out of your assigned room, such as in the hallway or lounge, or be lent to anyone.

Please note that mattresses not provided by Boston College are strictly prohibited in the residence halls (click here for a complete list of prohibited items). Ladders are designed for traditional hall triple lofts only and are not available for those who bunk their beds. When a room is de-tripled, the extra set of furniture will be removed without the students needing to submit a work order. If furniture is broken or missing, please submit a work order. The furniture will be evaluated and repaired or replaced.

", price: 10, guests: 4, beds: 4, bedrooms: 1, baths: 1, latitude: 42.334474, longitude: -71.174391})
iggy = Listing.create({title: "Ignacio Hall", description: "Standing physically atop a hill overlooking much of Lower—but emotionally somewhere between the paradise of The Mods and the purgatory of Edmond’s—Ignacio, Rubenstein, Gabelli, Voute and 66 Comm. Ave. halls round out the housing pack.

Known for their unusual layout and attractive exposed-brick interior, Ignacio and Rubenstein halls (referred to as Iggy and Ruby, respectively) are popular apartment-style options for seniors, with a larger variety of amenities. All apartment-style accommodations include private bathrooms, living rooms, dining areas, and, unlike suite-style residences, full kitchens. The two buildings share an extremely similar layout, and both house 364 students, the large majority of whom are seniors.

Along with attractive interiors, perks of life in Iggy and Ruby include extremely close proximity to academic buildings, and a select few photogenic rooms that offer beautiful views of St. Mary’s Hall and Gasson Tower. Though it may lack the reputation of other buildings on campus, residents often note that life in Ruby and Iggy is better than many think.

“The thing about Iggy is that it may not have the backstory of The Mods or the reputation of Walsh, but it is easily the most convenient building,” Iggy resident Katie Carsky, MCAS ’16, said. “I can put my laundry in, go to O’Neill, run back to change to the dryer and go back to O’Neill with ease.”

Moving slightly north in the direction of the Career Center, one will find Gabelli and Voute halls sitting pleasantly side by side overlooking Comm. Ave. These buildings feature similar room layouts to Ruby and Iggy, with high ceilings and extremely large windows and common spaces. Gabelli and Voute residents often cite proximity to the T and main gate bus stop as major location perks.

In addition, the six-person suite living arrangement predominantly found in Iggy, Ruby, Gabelli, and Voute is also a favorite among residents, and, according to Carsky, it may be the perfectly tolerable number of roommates.

“You almost always have someone to hang out with,” Carsky explained, “but it’s never too much.”

Rounding out the pack of Lower-/ Middle-Campus housing options is the often-overlooked 66 Comm. Ave. Though laid out traditionally as opposed to suite- or apartment-style, 66 offers comfortable accommodations in an attractive brick building designated for sophomore honors students. Though the 233-person building is intended largely to house honors students, there remains a significant number of non-honors students, many of whom are overflow from the Walsh/Vandy/90 lottery.

“The Fishbowl Lounge,” a study lounge room enclosed by soundproof glass, is a favorite study spot among residents, who also note its location as ideal for Marathon Monday spectating.

Another point of pride among 66 residents is a recurring program appropriately entitled “Cookie Night,” in which the building’s resident minister provides homemade cookies for all residents on Wednesday nights.

Though many of these options are often viewed as second place to The Mods or Walsh, the perks are not to be underestimated. Location and cleanliness are just a few of the bright sides of living in the “second place” senior and sophomore housing options on Lower. All things considered, if you’re ever feeling down about your housing situation, remember—there’re lonely kids on Upper.

", price: 90, guests: 6, beds: 6, bedrooms: 3, baths: 2, latitude: 42.337932, longitude: -71.169722})
vandy = Listing.create({title: "Vanderslice Hall", description: "Beyond St. Ignatius Chapel, lining the gently curving St. Thomas More Rd., stands a powerful trio of modern-style buildings. This block of opulent on-campus lodging is composed of Vanderslice Hall, 90 St. Thomas More Rd., and the sparkling Stayer Hall (also known as “The Gate”). Decidedly the air-conditioned crown jewels of Lower Campus, this trinity of modern, suite-style comfort has long been considered the pinnacle of luxurious sophomore, junior, and occasional senior living.

For sophomores with the good lottery fortune to live on Lower Campus, Vanderslice and 90 St. Thomas More halls—known as “Vandy” and “90,” respectively—provide a more luxurious and socially tame alternative to life across The Mods in Walsh Hall. For juniors lucky enough to be granted four years of housing, Vandy and 90 are also popular on-campus options after The Gate inevitably fills. With the passing of the beloved Edmond’s Hall, however, Vandy and 90 promise to be an increasingly popular option in the upcoming semesters for juniors that intend to live on campus.

“It has really nice closet space, I’d say,” explained Vanderslice resident Omeed Alidadi, MCAS ’18, when asked about his favorite aspects of life in Vandy. “The common room is very spacious, and the location is pretty prime,” he added, highlighting the proximity to Corcoran Commons, and the Plex.

Vandy houses 423 students, while 381 reside in 90. Both feature fully air-conditioned, suite-style accommodations. Though the most common suite arrangement is that of the eight-man configuration, a few unusual exceptions also exist, like six-person suites exclusive to 90 and nine-person suites unique to Vandy.

In addition to the obvious location and amenity perks of life in Vandy and 90, the buildings also have their share of unexpected quirks providing some character. Among these, 90 offers several lounge-style practice rooms featuring pianos for student use, and unique spiral staircases connect several of the study lounges in Vandy.

Among its weaknesses, Alidadi noted that the lack of social scene between Vandy and 90 isn’t always a great thing, and the lack of excitement in the halls is at times very noticeable.

“People might stop here, but they really spend their night in Walsh or The Mods.” Alidadi added that all nights eventually lead down a similar path and find their way to BC’s great equalizer—Late Night.

“All things considered, if you’re looking for some peace and quiet, I’d definitely recommend living in Vandy or 90,” concluded Alidadi, adding that, “it’s pretty close to El Pelon, too.”

Close in physical proximity to Vandy and 90, Stayer Hall is a residence hall with an exterior that speaks volumes about its interior aesthetic. Currently, but not for long, the newest building on the scene, Stayer is nothing short of a ritzy apartment building. This towering oasis on Lower Campus houses 306 students and is home largely to on-campus juniors and seniors, featuring an array of glimmering suite-style rooms with standard partial kitchens.

“Stayer has been nothing short of incredible,” raved junior resident Brian Brooks, MCAS ’17. “The building itself is gorgeous—well-lit, carpeted throughout, and kept very clean.”

Just slightly over 10 years old, Stayer Hall’s youth is still evident, exemplified by its cleanliness and the consistent performance of its various amenities and appliances.

“The elevators are quick and efficient,” Brooks added, “though they do lack the charm that comes with the impending feeling of death provided by elevators in a building like 90.”

“Charm” aside, Stayer is a heavy favorite of juniors and seniors in non-modular housing, and it looks as though this is not soon to change.", price: 100, guests: 8, beds: 8, bedrooms: 4, baths: 2, latitude: 42.338626, longitude: -71.167012})



walsh_1 = open('https://airzzz-seeds.s3.amazonaws.com/thomas_moore.jpg')
walsh_2 = open('https://airzzz-seeds.s3.amazonaws.com/walsh_hall.jpg')
walsh_3 = open('https://airzzz-seeds.s3.amazonaws.com/walsh-bc.jpg')
walsh_4 = open('https://airzzz-seeds.s3.amazonaws.com/walsh-front-view.jpg')
walsh_5 = open('https://airzzz-seeds.s3.amazonaws.com/walsh-layout.jpg')
walsh.photos.attach(io: walsh_1, filename: 'thomas_more.jpg')
walsh.photos.attach(io: walsh_2, filename: 'walsh_hall.jpg')
walsh.photos.attach(io: walsh_3, filename: 'walsh-bc.jpg')
walsh.photos.attach(io: walsh_4, filename: 'walsh-front-view.jpg')
walsh.photos.attach(io: walsh_5, filename: 'walsh-layout.jpg')

fitz_1 = open('https://airzzz-seeds.s3.amazonaws.com/fitz-out.jpg')
fitz_2 = open('https://airzzz-seeds.s3.amazonaws.com/fitz-flowers.jpg')
fitz_3 = open('https://airzzz-seeds.s3.amazonaws.com/fitz-lower.jpg')
fitz_4 = open('https://airzzz-seeds.s3.amazonaws.com/fitz-room.jpg')
fitz_5 = open('https://airzzz-seeds.s3.amazonaws.com/fitz-street.jpg')
fitz.photos.attach(io: fitz_1, filename: 'fitz-out.jpg')
fitz.photos.attach(io: fitz_2, filename: 'fitz-flowers.jpg')
fitz.photos.attach(io: fitz_3, filename: 'fitz-lower.jpg')
fitz.photos.attach(io: fitz_4, filename: 'fitz-room.jpg')
fitz.photos.attach(io: fitz_5, filename: 'fitz-street.jpg')

iggy_1 = open('https://airzzz-seeds.s3.amazonaws.com/iggy-plex.jpg')
iggy_2 = open('https://airzzz-seeds.s3.amazonaws.com/iggy-stat.jpg')
iggy_3 = open('https://airzzz-seeds.s3.amazonaws.com/iggy-lounge.jpg')
iggy_4 = open('https://airzzz-seeds.s3.amazonaws.com/iggy-stock.jpg')
iggy_5 = open('https://airzzz-seeds.s3.amazonaws.com/iggy-man.jpg')
iggy.photos.attach(io: iggy_1, filename: 'iggy-plex.jpg')
iggy.photos.attach(io: iggy_2, filename: 'iggy-stat.jpg')
iggy.photos.attach(io: iggy_3, filename: 'iggy-lounge.jpg')
iggy.photos.attach(io: iggy_4, filename: 'iggy-stock.jpg')
iggy.photos.attach(io: iggy_5, filename: 'iggy-man.jpg')

vandy_1 = open('https://airzzz-seeds.s3.amazonaws.com/vandy-nice.jpg')
vandy_2 = open('https://airzzz-seeds.s3.amazonaws.com/vandy-out.jpg')
vandy_3 = open('https://airzzz-seeds.s3.amazonaws.com/vandy-lib.jpg')
vandy_4 = open('https://airzzz-seeds.s3.amazonaws.com/vandy-boston.jpg')
vandy_5 = open('https://airzzz-seeds.s3.amazonaws.com/vandy-eag.jpg')
vandy.photos.attach(io: vandy_1, filename: 'vandy-nice.jpg')
vandy.photos.attach(io: vandy_2, filename: 'vandy-out.jpg')
vandy.photos.attach(io: vandy_3, filename: 'vandy-lib.jpg')
vandy.photos.attach(io: vandy_4, filename: 'vandy-boston.jpg')
vandy.photos.attach(io: vandy_5, filename: 'vandy-eag.jpg')
