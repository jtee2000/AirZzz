json.extract! listing, :id, :title, :description, :price, :guests, :beds, :bedrooms, :baths, :longitude, :latitude 
json.reviews listing.reviews
if listing.photos.attached?
    json.photoUrl do
        json.array! listing.photos.each do |photo|
                json.extract! photo, :service_url
                # url_for(photo)
        end
    end
    # json.photoUrl do 
    #     json.array! listing.photos, :service_url
    # end
    # json.photoUrl url_for(@.photos.first)
    # json.photo2 url_for(listing.photos.second)
end