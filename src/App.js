import React, { useState, useEffect}  from "react"; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NewWorkout from "./components/NewWorkout";
import WorkoutInfo from "./components/WorkoutInfo";
import EditWorkout from "./components/EditWorkout";

const App = () => {

  const [workouts, setWorkouts] = useState([])
  const [workoutdelete, setWorkoutdelete] = useState([]);


  useEffect(() => {
   fetch("http://localhost:9292/workouts")
     .then((r) => r.json())
     .then((workouts) => {
       setWorkouts(workouts)
      });
 }, [workoutdelete]);

 function handleUpdateWorkout(updatedWorkoutInfo) {
   const updatedWorkouts = workouts.map(workout => {
     if (workout.id === updatedWorkoutInfo.id) {
       return updatedWorkoutInfo;
     } else {
       return workout;
     }
   });
   setWorkouts(updatedWorkouts);
 }

 function handleDeleteWorkout(deletedWorkout) {
  const updatedWorkouts = workoutdelete.filter((workout) => workout.id !== deletedWorkout.id)
  setWorkoutdelete(updatedWorkouts)
}

  return ( 
    <div className="content">
    <Navbar />
    <br />
      <Routes>
        <Route exact path="/" element={<Home workouts={workouts} onWorkoutDelete={handleDeleteWorkout}/>}/>
        <Route exact path="/NewWorkout" element={<NewWorkout setWorkouts={setWorkouts} workouts={workouts}/>}/>
        <Route path="/Workout/:id" element={<WorkoutInfo workouts={workouts} setWorkouts={setWorkouts} onWorkoutDelete={handleDeleteWorkout} onUpdateWorkout={handleUpdateWorkout}/>}/>
        <Route path="/workouts/:id/edit" element={<EditWorkout setWorkouts={setWorkouts} workouts={workouts} onUpdateWorkout={handleUpdateWorkout}/>}/>
      </Routes>
    </div>
     
  );
}

export default App;

