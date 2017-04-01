class Task < ApplicationRecord
  validates :author, :list, :title, presence: true
  validates :resolved, inclusion: { in: [true, false] }

  belongs_to :list
  has_one :author,
    through: :list
end
