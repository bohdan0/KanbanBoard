class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.integer :list_id, null: false
      t.string :title, null: false
      t.boolean :resolved, null: false, default: false

      t.timestamps
    end
    add_index :tasks, :list_id
  end
end
