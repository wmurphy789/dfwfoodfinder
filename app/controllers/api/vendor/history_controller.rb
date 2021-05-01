class Api::Vendor::HistoryController < ApplicationController
  def index
    @history = Booking.where(vendor_id: current_vendor.id)
                      .order(start_date: :asc)
    render :index
  end