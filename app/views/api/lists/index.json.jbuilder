@lists.each do |list|
  json.set! list.id do
    json.extract! list, :id, :title, :tasks
  end
end