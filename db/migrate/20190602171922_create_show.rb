class CreateShow < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.string :maturity_rating, null: false
      t.string :description, null: false
      t.timestamps
    end
    add_index :shows, :title, unique: true
  end
end
