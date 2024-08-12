// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Swimlane from './components/Swimlane';
import Filter from './components/Filter';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Filter />
        <div className="swimlanes">
          {/* Render Swimlane components here */}
          <Swimlane/>
        </div>
      </div>
    </Provider>
  );
};

export default App;
