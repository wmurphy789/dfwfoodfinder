class ChanegNameToVendors < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :listing_id
    rename_table :listings, :vendors
    rename_column :reviews, :listing_id, :vendor_id
    add_index :reviews, :vendor_id
  end
end
