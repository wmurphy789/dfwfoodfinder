class Api::Vendor::UsersController < ApplicationController
  
  def create
    puts "vendor_params: #{vendor_params}"
    @vendor = ::Vendor.new(vendor_params)
    puts "@vendor:"
    if @vendor.save
      login_vendor!(@vendor)
      render :show
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