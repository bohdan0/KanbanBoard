class Task < ApplicationRecord
  validates :author, :list, :title, presence: true
  validates :resolved, inclusion: { in: [true, false] }

  belongs_to :list
  belongs_to :author,
    through: :list
end
