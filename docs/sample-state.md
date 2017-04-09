```js
{
  currentUser: {
    id: 1,
    username: "user1"
  },
  listState: {
    list_ids: [1],
    lists: {
      // list_id: list_data
      1: {
        id: 1,
        title: 'My first list'
      }
    }
  },
  taskState: {
    task_ids: {
      // list_id: [task_ids]
      1: [1, 2]
    },
    tasks: {
      // task_id: task_data
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
}
```