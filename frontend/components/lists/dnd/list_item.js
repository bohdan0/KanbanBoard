export const dropTarget = {
  drop(props, monitor, component) {
    if (monitor.isOver()) {
      const { list } = props;
      return { newListId: list.id, newPosition: list.task_ids.length };
    }
  }
};

export const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};