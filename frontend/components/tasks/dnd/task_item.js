export const taskSource = {
  beginDrag(props) {
    const { task } = props;
    return task;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) return;

    const task = monitor.getItem();
    const { newListId, newPosition } = monitor.getDropResult();
    props.moveTask(task, newListId, newPosition);
  }
};

export const sourceCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

export const dropTarget = {
  drop(props, monitor, component) {
    const { task, task_ids } = props;
    const newPosition = task_ids.indexOf(task.id);
    return { newListId: task.list_id, newPosition };
  }
};

export const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};