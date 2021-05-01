json.extract! vendor, :id, :title, :description, :num_guests, :num_rooms, :num_beds, :num_baths, :vendor_type, :price, :self_check_in, :parking, :kitchen, :washer, :dryer, :dishwasher, :wifi, :tv, :bathroom_essentials, :bedroom_comforts, :coffee_maker, :hair_dryer, :location, :location_description, :lat, :long, :host_id

json.average_rating vendor.average_rating
json.num_reviews vendor.num_reviews

# review_ids = []
# vendor.reviews.each { |review| review_ids << review.id}
# json.reviewIds review_ids

if vendor.photos.attached?
  json.photoUrls vendor.photos.map {|file| url_for(file)}
end

if vendor.thumbnails.attached?
  json.thumbnailUrls vendor.thumbnails.map {|file| url_for(file)}
end

if vendor.reviews
  json.reviews vendor.reviews
end

if vendor.reviewers
  reviewers = []
  vendor.reviewers.each do |reviewer|
    if reviewer.photo.attached?

    end
    reviewers << reviewer
  end
  json.reviewers reviewers
  
end