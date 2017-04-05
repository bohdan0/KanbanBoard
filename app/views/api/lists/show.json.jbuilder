json.extract! @list, :id, :title, :tasks
json.task_ids do
  json.array! @list.tasks.map(&:id)
end