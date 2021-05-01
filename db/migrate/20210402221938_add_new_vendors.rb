class AddNewVendors < ActiveRecord::Migration[5.2]
  def change
    add_column :vendors, :password_digest, :string
    add_column :vendors, :email, :string
  end
end
