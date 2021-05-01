@history.each do |history|
  json.set! history.id do 
    json.partial! 'history', history: history
  end
end