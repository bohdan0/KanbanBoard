@lists.each do |list|
  json.set! list.id do
    json.extract! list, :id, :title, :tasks
    json.task_ids do
      json.array! list.tasks.map { |task| task.id }
    end
  end
end