json.extract! booking, :id, :start_date, :end_date, :num_guests, :vendor_id, :user_id

json.vendor do
  json.partial! 'api/vendors/vendor', vendor: booking.vendor
end
