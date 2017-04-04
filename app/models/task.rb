class Task < ApplicationRecord
  validates :author, :list, :title, presence: true
  validates :resolved, inclusion: { in: [true, false] }

  belongs_to :list
  has_one :author,
    through: :list

  acts_as_list scope: :list
  after_create :move_to_top
end
