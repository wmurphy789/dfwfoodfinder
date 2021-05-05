class Api::Vendor::UsersController < ApplicationController
  
  def create
    @vendor = ::Vendor.new(vendor_params)
    if @vendor.save
      login_vendor!(@vendor)
      render "vendor/show"
    else
      render json: @vendor.errors.full_messages, status: 401
    end
  end

  private

  def vendor_params
    params.require(:vendor).permit(:title, :description, :email, :password, 
      :confirm_password, :vendor_type, :photo)
  end

end