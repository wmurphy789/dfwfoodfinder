class Vendor < ApplicationRecord
  has_many_attached :photos
  has_many_attached :thumbnails
  has_many :reviews, foreign_key: :vendor_id, class_name: 'Review'
  has_many :reviewers, through: :reviews, source: :user
  has_many :locations

  enum vendor_type: [:food_truck, :homemade]

  before_validation :ensure_session_token

  def self.in_bounds(bounds)
    bounds = JSON.parse(bounds)

    self.where('lat < ?', bounds["northEast"]["lat"].to_f)
      .where('lat >?', bounds["southWest"]["lat"].to_f)
      .where('long < ?', bounds["northEast"]["lng"].to_f)
      .where('long > ?', bounds["southWest"]["lng"].to_f)
  end

  def average_rating
    rating_total = 0
    count = 0

    if self.reviews
      self.reviews.each do |review|
        rating_total += review.rating
        count += 1
      end
    end

    '%.2f' % (rating_total.to_f / count).round(2)
  end

  def num_reviews
    self.reviews.count.to_s
  end

  def self.find_by_credentials(username, password)
    @vendor = Vendor.find_by(email: username)
    return nil unless @vendor
    @vendor.is_password?(password) ? @vendor : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
  end
    
end
