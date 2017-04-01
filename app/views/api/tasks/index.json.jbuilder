@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :list_id, :resolved
  end
end