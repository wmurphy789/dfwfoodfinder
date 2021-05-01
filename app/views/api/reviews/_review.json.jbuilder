json.extract! review, :id, :user_id, :vendor_id, :review, :rating, :accuracy, :communication, :cleanliness, :location, :check_in, :value

json.extract! review.user, :id, :username, :email, :bio, :joined_date, :firstname

if review.user.photo.attached?
    json.photoUrl url_for(review.user.photo)
end
