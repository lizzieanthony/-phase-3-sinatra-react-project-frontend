import React, { useState, useEffect}  from "react"; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NewWorkout from "./components/NewWorkout";
import WorkoutInfo from "./components/WorkoutInfo"

const App = () => {

  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
   fetch("http://localhost:9292/workouts")
     .then((r) => r.json())
     .then((workouts) => {
      //  debugger
       setWorkouts(workouts)
      });
 }, []);

//  function addNewWorkout accept data sent from form 
// or send workouts on to NewWorkout

// function add exercise to a workout

  return ( 
    <div className="content">
    <Navbar />
    <br />
      <Routes>
        <Route exact path="/" element={<Home workouts={workouts}/>}/>
        <Route exact path="/NewWorkout" element={<NewWorkout workouts={workouts}/>}/>
        <Route path="/Workout/:id" element={<WorkoutInfo workouts={workouts}/>}/>

      </Routes>
    </div>
     
  );
}

export default App;

