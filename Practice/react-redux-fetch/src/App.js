import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Redux/action';
// import { fetchData } from './actions/dataActions';

const App = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Data Fetch with Redux</h1>
      {dataState.loading && <p>Loading...</p>}
      {dataState.error && <p>Error: {dataState.error.message}</p>}
      <ul>
        {dataState.data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
