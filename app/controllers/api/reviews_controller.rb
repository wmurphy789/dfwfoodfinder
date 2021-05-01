class Api::ReviewsController < ApplicationController
  def index
    @reviews = vendor_id ? Review.get_by_vendor_id(vendor_id) : Review.all
    render :index
  end

  private

  def vendor_id
    params[:vendor_id]
  end
end
