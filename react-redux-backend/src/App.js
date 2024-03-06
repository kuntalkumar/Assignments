// App.js
import React from 'react';
import { Provider } from 'react-redux';
import Counter from './Component/Counter.jsx';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
