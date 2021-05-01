json.array! @vendors do |vendor|
  json.partial! 'vendor', vendor: vendor
end
