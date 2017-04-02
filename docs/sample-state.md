```js
{
  currentUser: {
    id: 1,
    username: "user1"
  },
  lists: {
    1: {
      id: 1,
      title: "My first list",
      tasks: [1, 2]
    }
  },
  tasks: {
    1: {
      id: 1,
      list_id: 1,
      title: "My first task",
      resolved: true
    }, 
    2: {
      id: 2,
      list_id: 1,
      title: "My second task",
      resolved: false
    }
  }
}
```