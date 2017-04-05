json.extract! @user, :id, :username
json.list_ids do
  json.array! @user.lists.map(&:id)
end