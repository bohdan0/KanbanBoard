class Task < ApplicationRecord
  validates :author, :list, :title, presence: true
  validates :resolved, inclusion: { in: [true, false] }

  belongs_to :list
  has_one :author,
    through: :list

  acts_as_list scope: :list
  after_create :move_to_top

  def update_task(spec)
    if spec[:list_id] != list_id
      move_between_lists(spec)
    else
      move_in_same_list(spec)
    end
  end

  private
    def move_in_same_list(spec)
      if !spec[:position] || spec[:position] == ""
        move_to_bottom
      else
        update(spec)
      end
    end

    def move_between_lists(spec)
      if !spec[:position] || spec[:position] == ""
        update(list_id: spec[:list_id])
        move_to_bottom
      else
        update(spec)
      end
    end
end
