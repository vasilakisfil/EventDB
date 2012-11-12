class CreateMicroposts < ActiveRecord::Migration
  def change
    create_table :microposts do |t|
      t.string :title
      t.string :content
      t.decimal :lat, precision: 15, scale: 12
      t.decimal :lon, precision: 15, scale: 12
      t.integer :user_id

      t.timestamps
    end
    add_index :microposts, [:user_id, :created_at]
  end
end
