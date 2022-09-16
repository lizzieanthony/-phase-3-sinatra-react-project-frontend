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

  return (
    // styling? 
    <>
     <Navbar />
      <Routes>
        <Route exact path="/" element={<Home workouts={workouts}/>}/>
        <Route exact path="/NewWorkout" element={<NewWorkout />}/>
        <Route path="/Workout/:id" element={<WorkoutInfo workouts={workouts}/>}/>

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
