export const dropTarget = {
  drop(props, monitor, component) {
    if (monitor.isOver()) {
      return { newPosition: props.list_ids.length };
    }
  }
};

export const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};