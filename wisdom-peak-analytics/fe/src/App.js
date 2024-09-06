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

      <div className='workExperience'>

     
        <h3> Operation Executive</h3>
        <h4>Finnovation Tech Solution Pvt Ltd</h4>
        <p> May 2022 - Aug 2024</p>

          </div>


      <div className='education'>
        <div className='collegeEducation'>
          <h3> B.Tech in Electronics and
          Communication Engineering</h3>
          <h4>Bengal Institute Of Technology And
          Management</h4>
          <p>June 2022- May 2025</p>
        </div>
        <div className='MasaiEducation'>
          <h3>Full Stack Web Development</h3>
          <h4>Masai School</h4>
          <p>November 2022 - November 2023</p>
        </div>

      </div>

      <div className='skills'>
        <div className='technicalskills'>
          <h2>Technical Skills</h2>
          <hr />
          <p>HTML5</p>
          <p>CSS3</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MongoDB</p>
        </div>


        <div className='softskills'>
          <h2>Soft Skills</h2>
          <hr />
          <p>Problem Solving</p>
          <p>Teamwork</p>
          <p>Time Management</p>
          <p>Adaptability</p>

        </div>
      </div>


      <div className='hobbies'>
          <h2>Hobbies</h2>
          <hr />
          <p>Travelling</p>
          <p>Reading Technical blogs</p>
          <p>Listening Music</p>
        </div>

        <div className='staticContact'>

        <p>kuntalkumar789@gmail</p>
        <p>7908295742</p>
        <p><a href="https://www.linkedin.com/in/kuntal-kumar-621205236/">LinkedIn</a></p>

        </div>

        <div className='downloadResumebtn'>
        <button>Download</button>

        </div>
    </div>
  );
}

export default App;
