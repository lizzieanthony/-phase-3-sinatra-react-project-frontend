import React, { useState, useEffect}  from "react"; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NewWorkout from "./components/NewWorkout";
import WorkoutInfo from "./components/WorkoutInfo";
import EditWorkout from "./components/EditWorkout";

const App = () => {

  const [workouts, setWorkouts] = useState([])
  const [workoutDelete, setWorkoutDelete] = useState([])
  const [exerciseDelete, setExerciseDelete] = useState([]);


  useEffect(() => {
   fetch("http://localhost:9292/workouts")
     .then((r) => r.json())
     .then((workouts) => {
       setWorkouts(workouts)
      });
 }, [workoutDelete, exerciseDelete]);

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
  const updatedWorkouts = workoutDelete.filter((workout) => workout.id !== deletedWorkout.id)
  setWorkoutDelete(updatedWorkouts)
}

// find workout 
  // filter that workouts exercises
  // map through all workouts returning the workout as is if its not the right one 
  // returning the workout with the new set of filtered exercises 
// set workouts to the map answe
function handleDeleteExercise(deletedExercise) {
  // debugger
  const updatedExercises = workouts.map(workout => {
    if (workout.exercise.id !== deletedExercise.id )
  })

  // const updatedExercises = exerciseDelete.filter((exercise) => exercise.id !== deletedExercise.id)
  // setExerciseDelete(updatedExercises)
}

  return ( 
    <div className="content">
    <Navbar />
    <br />
      <Routes>
        <Route exact path="/" element={<Home workouts={workouts} onWorkoutDelete={handleDeleteWorkout}/>}/>
        <Route exact path="/NewWorkout" element={<NewWorkout setWorkouts={setWorkouts} workouts={workouts}/>}/>
        <Route path="/Workouts/:id" element={<WorkoutInfo workouts={workouts} setWorkouts={setWorkouts} onWorkoutDelete={handleDeleteWorkout} onExerciseDelete={handleDeleteExercise} onUpdateWorkout={handleUpdateWorkout}/>}/>
        <Route path="/workouts/:id/edit" element={<EditWorkout setWorkouts={setWorkouts} workouts={workouts} onUpdateWorkout={handleUpdateWorkout}/>}/>
      </Routes>
    </div>
     
  );
}

export default App;

