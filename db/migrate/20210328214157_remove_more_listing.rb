class RemoveMoreListing < ActiveRecord::Migration[5.2]
  def change
    rename_column :vendors, :listing_type, :vendor_type
    remove_index :bookings, :listing_id
    rename_column :bookings, :listing_id, :vendor_id
    add_index :bookings, :vendor_id
  end
end
