class Api::Vendor::SessionsController < ApplicationController
  def create
    @vendor = ::Vendor.find_by_credentials(
      params[:vendor][:username], 
      params[:vendor][:password]
    )
    
    if @vendor
      login_vendor!(@vendor)
      render :show
    else
      render json: ['Incorrect username/password combo. Please try again.'], status: 401
    end
  end

  def destroy
    if current_vendor
      logout_vendor!
      render json: {}
    else
      render json: ["No currently logged in user"], status: 401
    end
  end
end
