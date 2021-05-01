class UpdateVendors < ActiveRecord::Migration[5.2]
  def change
    remove_column :vendors, :num_guests
    remove_column :vendors, :num_beds
    remove_column :vendors, :num_baths
    remove_column :vendors, :price
    remove_column :vendors, :self_check_in
    remove_column :vendors, :parking
    remove_column :vendors, :kitchen
    remove_column :vendors, :washer
    remove_column :vendors, :dryer
    remove_column :vendors, :dishwasher
    remove_column :vendors, :wifi
    remove_column :vendors, :tv
    remove_column :vendors, :bathroom_essentials
    remove_column :vendors, :bedroom_comforts
    remove_column :vendors, :coffee_maker
    remove_column :vendors, :hair_dryer
    remove_column :vendors, :location
    remove_column :vendors, :location_description
    remove_column :vendors, :lat 
    remove_column :vendors, :long 
    remove_column :vendors, :host_id
    remove_column :vendors, :num_rooms
    
    change_column :vendors, :vendor_type, :int, using: 'vendor_type::integer'
    drop_table :bookings
  end
end
