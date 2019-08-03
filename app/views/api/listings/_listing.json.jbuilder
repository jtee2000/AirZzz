json.extract! listing, :id, :title, :description, :price, :guests, :beds, :bedrooms, :baths, :longitude, :latitude 

ct = 0; 
if listing.photos.attached?
    # debugger
    # json.photoUrl do
    #     listing.photos.each do |photo|
    #         debugger
    #         json.set! ct do 
    #             url_for(photo)
    #         end
    #         ct+=1
    #     end
    # end
    # debugger
    json.photoUrl url_for(listing.photos.first)
    # json.photo2 url_for(listing.photos.second)
end