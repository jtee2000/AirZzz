
@listings.each do |listing|
    json.set! listing.id do
        json.partial! "api/listings/listing", listing: listing
        json.reviews listing.reviews 
    end
end