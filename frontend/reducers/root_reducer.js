import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ListsReducer from './lists_reducer';
import TasksReducer from './tasks_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  taskState: TasksReducer,
  listState: ListsReducer
});

export default RootReducer;