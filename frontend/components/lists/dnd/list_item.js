export const listSource = {
  beginDrag(props) {
    const { list } = props;
    return list;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) return;

    const list = monitor.getItem();
    const { newPosition } = monitor.getDropResult();
    props.moveList(list, newPosition);
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
    if (monitor.isOver()) {
      const { list } = props;
      switch(monitor.getItemType()) {
        case 'task':
        const { task_ids } = props;
          return { newListId: list.id, newPosition: task_ids.length };
        case 'list':
          const { list_ids } = props;
          return { newPosition: list_ids.indexOf(list.id) };
      }
    }
  }
};

export const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};