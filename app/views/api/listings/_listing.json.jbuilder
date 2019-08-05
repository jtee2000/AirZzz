json.extract! listing, :id, :title, :description, :price, :guests, :beds, :bedrooms, :baths, :longitude, :latitude 

if listing.photos.attached?
    # debugger
    # json.photoUrl do
    #     listing.photos.each do |photo|
    #         # debugger
    #             photo.service_url
    #     end
    # end
    json.photoUrl2 do 
        json.array! listing.photos, :service_url
    end
    # debugger
    json.photoUrl url_for(listing.photos.first)
    # json.photo2 url_for(listing.photos.second)
end