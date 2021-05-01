class AddSessiontTOken < ActiveRecord::Migration[5.2]
  def change
    add_column :vendors, :session_token, :string
    add_index :vendors, :session_token, unique: true
  end
end
