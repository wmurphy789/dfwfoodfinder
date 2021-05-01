class Api::Vendor::HistoryController < ApplicationController
  def index
    @history = ::Location.where(vendor_id: current_vendor.id)
                         .order(start_time: :asc)
    render :index
  end
end