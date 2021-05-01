class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :location
      t.text :location_description
      t.float :lat
      t.float :long
      t.integer :vendor_id, foreign_key: true
      t.datetime :start_time
      t.datetime :end_time
    end

    add_reference :locations, :vendors, foreign_key: true
  end
end
