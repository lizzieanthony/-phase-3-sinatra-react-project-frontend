import React from "react"; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NewWorkout from "./components/NewWorkout";
import WorkoutInfo from "./components/WorkoutInfo"

const App = () => {
  return (
    // styling?
    <>
     <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/NewWorkout" element={<NewWorkout />}/>
        <Route path="/Workout/:id" element={<WorkoutInfo />}/>

      </Routes>
    </>

  // <Routes>
  //   <div className="App">
  //     <Navbar />
  //     <div className="content">
  //         <Route exact path="/" element={<Home />}/>
  //     </div>
  //   </div>
  // </Routes>
  );
}

export default App;
