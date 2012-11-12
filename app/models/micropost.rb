# == Schema Information
#
# Table name: microposts
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  content    :string(255)
#  lat        :decimal(15, 12)
#  lon        :decimal(15, 12)
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Micropost < ActiveRecord::Base
  attr_accessible :content, :lat, :lon, :title
  belongs_to :user

  validates :title, presence: true, length: { maximum: 20 }
  validates :content, length: { maximum: 200 }
  validates :lat, presence: true,
            numericality: { greater_than_or_equal_to: -90,
            less_than_or_equal_to: 90 }
  validates :lon, presence: true,
            numericality: { greater_than_or_equal_to: -180,
            less_than_or_equal_to: 180 }
  validates :user_id, presence: true

  default_scope order: 'microposts.created_at DESC'
end
