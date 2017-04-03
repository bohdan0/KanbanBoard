import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const App = ({ children }) => (
  <div className='app'>
    { children }
  </div>
);

export default DragDropContext(HTML5Backend)(App);