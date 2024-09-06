import './App.css';

function App() {
  return (
    <div className="App">
      <div className='topSection'>

          <h1> Kuntal Kumar</h1>
          <h4>Full Web Stack Developer</h4>
        <p>Bangalore , Karnataka </p>
      </div>
      <div className='profilePic'>
        <img src={require('./asset/profile-pic.png')} alt="image" width={"200px"} />

      </div>
    </div>
  );
}

export default App;
