# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  user_id       :integer          not null
#  vendor_id    :integer          not null
#  review        :text
#  rating        :integer
#  accuracy      :integer
#  communication :integer
#  cleanliness   :integer
#  location      :integer
#  check_in      :integer
#  value         :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :vendor,
    foreign_key: :vendor_id,
    class_name: 'Vendor'

    def self.get_by_vendor_id(vendor_id)
      self.where("vendor_id = ?", vendor_id)
    end
end

