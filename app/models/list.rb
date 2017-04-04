class List < ApplicationRecord
  validates :author, :title, presence: true

  has_many :tasks,
    -> { order(position: :asc) },
    dependent: :destroy
  
  belongs_to :author,
    class_name: :User
end
