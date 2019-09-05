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


demo = User.create({email: "demo@demo.com", fname: "Demo", lname: "Demo", password: "starwars"})
paris = Listing.create({city: "Paris", title: "Chateau in heart of Paris", description: "Paris is the capital city of France, and the largest city in France. The area is 105 square kilometres (41 square miles), and around 2.15 million people live there. If suburbs are counted, the population of the Paris area rises to 12 million people.

The Seine river runs through the oldest part of Paris, and divides it into two parts, known as the Left Bank and the Right Bank. It is surrounded by many forests.

Paris is also the center of French economy, politics, traffic and culture. Paris has many art museums and historical buildings. As a traffic center, Paris has a very good underground subway system (called the Metro). It also has two airports. The Metro was built in 1900, and its total length is more than 200 km (120 mi).

The city has a multi-cultural style, because 20% of the people there are from outside France.[source?] There are many different restaurants with all kinds of food. Paris also has some types of pollution like air pollution and light pollution.", price: 200, guests: 2, beds: 1, bedrooms: 1, baths: 1, latitude: 48.862883, longitude: 2.345349})

china = Listing.create({city: "Beijing", title: "Studio Appartment in Beijing", description: "Beijing (/ˌbeɪˈdʒɪŋ/ BAY-JING, nonstandard /ˌbeɪˈʒɪŋ/ BAY-ZHING;[10][11] Mandarin pronunciation: [pèi.tɕíŋ] (About this soundlisten)), formerly romanized as Peking[12] (/ˌpiːˈkɪŋ/ PEE-KING),[11] is the capital of the People's Republic of China, the world's third most populous city proper, and most populous capital city. The city, located in northern China, is governed as a municipality under the direct administration of the central government with 16 urban, suburban, and rural districts.[13] Beijing Municipality is surrounded by Hebei Province with the exception of neighboring Tianjin Municipality to the southeast; together, the three divisions form the Jingjinji metropolitan region and the national capital region of China.[14]

Beijing is an important world capital and global power city, and one of the world's leading centers for politics, economy and business, finance, education, culture, innovation and technology, architecture, language, and diplomacy. A megacity, Beijing is the second largest Chinese city by urban population after Shanghai and is the nation's political, cultural, and educational center.[15] It is home to the headquarters of most of China's largest state-owned companies and houses the largest number of Fortune Global 500 companies in the world, as well as the world's four biggest financial institutions.[16][17] It is also a major hub for the national highway, expressway, railway, and high-speed rail networks. The Beijing Capital International Airport has been the second busiest in the world by passenger traffic since 2010,[18] and, as of 2016, the city's subway network is the busiest and second longest in the world.", price: 300, guests: 6, beds: 4, bedrooms: 3, baths: 2, latitude: 39.966556, longitude: 116.375595})

korea = Listing.create({city: "Seoul", title: "Cottage in heart of Seoul", description: "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees.", price: 350, guests: 3, beds: 2, bedrooms: 2, baths: 1, latitude: 37.563277, longitude: 126.992222})

japan = Listing.create({city: "Tokyo", title: "Nice quaint appartment", description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).", price: 450, guests: 2, beds: 1, bedrooms: 1, baths: 1, latitude: 35.692022, longitude: 139.728303})



walsh = Listing.create({city: "Boston", title: "Walsh Hall", description: "A building comprised of sophomores, eight-mans, and the Front Desk Pilot Project: Walsh Hall on Lower Campus, home to many late nights and sophomore bonding, is a favorite and quickly-picked building during the housing process.
Eight-man suites contain two bathrooms and a common room, offering more living space for residents to enjoy. Walsh is also centrally located—with its proximity to Corcoran Commons, the Res, the B-Line, and other residence halls, residents are able to enjoy different aspects of campus life right outside their door.
Walsh Hall is on Lower Campus and composed of four- and eight-person suites. \n\n It is the least expensive option for sophomores living on Lower Campus. If someone lives in Walsh, he or she is required to buy the meal plan since only the eight-man rooms come with a kitchenette.
The proximity to other sophomores on Lower Campus helps to create the social atmosphere that Walsh is known for around campus. Along with this comes the consequences of late nights every weekend, whether you are involved or not, due to the combination of loud music and thin walls.
According to many of Walsh’s sophomore residents, the partying can be somewhat of a double-edged sword, with its social perks but also obvious drawbacks. Life in Walsh can be, as a consequence, a tightrope act between these.
The atmosphere of having sophomores all around and a lively social scene has contributed to the installment of the Walsh Front Desk Pilot Project, where Walsh is the only building on campus that has front-desk security and police during the weekends. Residents of Walsh need to swipe in non-residents during the weekends, while any sophomores can access the building from 7 a.m. to midnight.", price: 40, guests: 4, beds: 4, bedrooms: 2, baths: 1, latitude: 42.338194, longitude: -71.165355})
fitz = Listing.create({city: "Boston", title: "Fitzpatrick Hall", description: "All maintenance issues including furnishings, pest control, and lock/combo changes should be submitted online via the Agora Portal. Please be sure to include the phone number at which you may be reached and a detailed description of the issue. If the request for repair is deemed malicious damage, appropriate charges will be added to your account and judicial sanctioning will be determined. All emergencies, such as leaks, flooding, no heat, broken locks, or combination pads, should be immediately called into the Facilities Service Center at 617-552-3048. If Facilities is closed, please call the BCPD at 617-552-4444.

Room and Apartment Furnishings:

Each room is assigned a set number of pieces of furniture. All furnishings assigned to your room must remain in your room. We do not have space to store furniture you do not want. Furniture may be moved within your assigned room only and must returned to its original position before check-out. Furnishings may not be moved out of your assigned room, such as in the hallway or lounge, or be lent to anyone.

Please note that mattresses not provided by Boston College are strictly prohibited in the residence halls (click here for a complete list of prohibited items). Ladders are designed for traditional hall triple lofts only and are not available for those who bunk their beds. When a room is de-tripled, the extra set of furniture will be removed without the students needing to submit a work order. If furniture is broken or missing, please submit a work order. The furniture will be evaluated and repaired or replaced.

", price: 10, guests: 4, beds: 4, bedrooms: 1, baths: 1, latitude: 42.334474, longitude: -71.174391})
iggy = Listing.create({city: "Boston", title: "Ignacio Hall", description: "Standing physically atop a hill overlooking much of Lower—but emotionally somewhere between the paradise of The Mods and the purgatory of Edmond’s—Ignacio, Rubenstein, Gabelli, Voute and 66 Comm. Ave. halls round out the housing pack.

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
vandy = Listing.create({city: "Boston", title: "Vanderslice Hall", description: "Beyond St. Ignatius Chapel, lining the gently curving St. Thomas More Rd., stands a powerful trio of modern-style buildings. This block of opulent on-campus lodging is composed of Vanderslice Hall, 90 St. Thomas More Rd., and the sparkling Stayer Hall (also known as “The Gate”). Decidedly the air-conditioned crown jewels of Lower Campus, this trinity of modern, suite-style comfort has long been considered the pinnacle of luxurious sophomore, junior, and occasional senior living.

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

paris_1 = open('https://airzzz-seeds.s3.amazonaws.com/paris-eiffel.jpg')
paris_2 = open('https://airzzz-seeds.s3.amazonaws.com/paris-landscape.jpg')
paris_3 = open('https://airzzz-seeds.s3.amazonaws.com/paris-cafe.jpg')
paris_4 = open('https://airzzz-seeds.s3.amazonaws.com/paris-bedroom.jpg')
paris_5 = open('https://airzzz-seeds.s3.amazonaws.com/paris-view.jpeg')
paris.photos.attach(io: paris_1, filename: 'paris-eiffel.jpg')
paris.photos.attach(io: paris_2, filename: 'paris-landscape.jpg')
paris.photos.attach(io: paris_3, filename: 'paris-cafe.jpg')
paris.photos.attach(io: paris_4, filename: 'paris-bedroom.jpg')
paris.photos.attach(io: paris_5, filename: 'paris-view.jpeg')

china_1 = open('https://airzzz-seeds.s3.amazonaws.com/china-city.jpeg')
china_2 = open('https://airzzz-seeds.s3.amazonaws.com/china-landscape.jpg')
china_3 = open('https://airzzz-seeds.s3.amazonaws.com/china-room.jpg')
china_4 = open('https://airzzz-seeds.s3.amazonaws.com/china-pool.jpg')
china_5 = open('https://airzzz-seeds.s3.amazonaws.com/china-chair.jpg')
china.photos.attach(io: china_1, filename: 'china-city.jpeg')
china.photos.attach(io: china_2, filename: 'china-landscape.jpg')
china.photos.attach(io: china_3, filename: 'china-room.jpg')
china.photos.attach(io: china_4, filename: 'china-pool.jpg')
china.photos.attach(io: china_5, filename: 'china-chair.jpg')

korea_1 = open('https://airzzz-seeds.s3.amazonaws.com/korea-1.jpg')
korea_2 = open('https://airzzz-seeds.s3.amazonaws.com/korea-2.jpg')
korea_3 = open('https://airzzz-seeds.s3.amazonaws.com/korea-3.jpg')
korea_4 = open('https://airzzz-seeds.s3.amazonaws.com/korea-4.jpg')
korea_5 = open('https://airzzz-seeds.s3.amazonaws.com/korea-5.jpg')
korea.photos.attach(io: korea_1, filename: 'korea-1.jpg')
korea.photos.attach(io: korea_2, filename: 'korea-2.jpg')
korea.photos.attach(io: korea_3, filename: 'korea-3.jpg')
korea.photos.attach(io: korea_4, filename: 'korea-4.jpg')
korea.photos.attach(io: korea_5, filename: 'korea-5.jpg')

japan_1 = open('https://airzzz-seeds.s3.amazonaws.com/japan-1.jpg')
japan_2 = open('https://airzzz-seeds.s3.amazonaws.com/japan-2.jpg')
japan_3 = open('https://airzzz-seeds.s3.amazonaws.com/japan-3.jpg')
japan_4 = open('https://airzzz-seeds.s3.amazonaws.com/japan-4.jpg')
japan_5 = open('https://airzzz-seeds.s3.amazonaws.com/japan-5.jpg')
japan.photos.attach(io: japan_1, filename: 'japan-1.jpg')
japan.photos.attach(io: japan_2, filename: 'japan-2.jpg')
japan.photos.attach(io: japan_3, filename: 'japan-3.jpg')
japan.photos.attach(io: japan_4, filename: 'japan-4.jpg')
japan.photos.attach(io: japan_5, filename: 'japan-5.jpg')