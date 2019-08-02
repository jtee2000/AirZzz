json.extract! listing, :id, :title, :description, :price, :guests, :beds, :bedrooms, :baths, :longitude, :latitude 

if listing.photos.attached?
    # json.photoUrl do
    #     listing.photos.each do |photo|
    #         url_for(photo)
    #     end
    # end
    json.photoUrl url_for(listing.photos.first)
end