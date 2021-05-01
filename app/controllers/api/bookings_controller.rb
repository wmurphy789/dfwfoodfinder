class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.includes(:vendor)
                  .where(user_id: current_user.id)
                  .order(start_date: :asc)
    render :index
  end

  def show
    @booking = Booking.includes(:user).includes(:vendor).find_by(id: params[:id])
    render :show
  end

  def create
    @booking = Booking.new(booking_params)

    if @booking.save!
      render :show
    else
      render json: ['Booking is invalid.'], status: 401      
    end
  end

  def destroy
    @booking = Booking.find_by(id: params[:id])
    @booking.destroy!
    render json: ["Booking successfully removed."]
  end

  def update
    @booking = Booking.find_by(params[:id])
    @booking.update_attributes(booking_params)

    if @booking.save!
      render :show
    else
      render json: ['Unable to update booking'], status: 401
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:id, :start_date, :end_date, :num_guests, :vendor_id, :user_id)
  end
end
