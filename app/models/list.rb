class List < ApplicationRecord
  validates :author, :title, presence: true

  has_many :tasks,
    dependent: :destroy
  
  belongs_to :author,
    class_name: :User
end
