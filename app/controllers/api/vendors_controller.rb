class Api::VendorsController < ApplicationController
  def index    
    @vendors = bounds ? 
      Vendor.in_bounds(bounds).with_attached_thumbnails.with_attached_photos.includes(:reviews) : 
        Vendor.all.with_attached_thumbnails.with_attached_photos.includes(:reviews)
    
    if @vendors
      render :index  
    else
      render json: ["Vendors not found!"], status: 422
    end
  end

  def show
    @vendor = Vendor.with_attached_thumbnails.with_attached_photos.includes(:reviews).includes(:reviewers).find_by(id: params[:id])

    if @vendor
      render :show
    else
      render json: ["Vendor not found!"], status: 422
    end
  end
  
  private

  def vendor_params
    params.require(:vendor).permit(:title, :description, :num_guests, :vendor_type, :num_beds, :num_baths, :price, 
      :self_check_in, :parking, :kitchen, :washer, :dryer, :dishwasher, :wifi, :tv, :bathroom_essentials, :bedroom_comforts, 
      :coffee_maker, :hair_dryer, :location, :location_description, :lat, :long, :host_id, photos: [], thumbnails: [])
  end

  def bounds
    params[:bounds]
  end

  def user_id
    params[:user_id]
  end
end
