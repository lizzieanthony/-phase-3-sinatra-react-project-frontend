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

function handleDeleteExercise(deletedExercise) {
  const updatedExercises = exerciseDelete.filter((exercise) => exercise.id !== deletedExercise.id)
  setExerciseDelete(updatedExercises)
}

  return ( 
    <div className="content">
    <Navbar />
    <br />
      <Routes>
        <Route exact path="/" element={<Home workouts={workouts} onWorkoutDelete={handleDeleteWorkout}/>}/>
        <Route exact path="/newworkout" element={<NewWorkout setWorkouts={setWorkouts} workouts={workouts}/>}/>
        <Route path="/workouts/:id" element={<WorkoutInfo workouts={workouts} onWorkoutDelete={handleDeleteWorkout} onExerciseDelete={handleDeleteExercise} onUpdateWorkout={handleUpdateWorkout}/>}/>
        <Route path="/workouts/:id/edit" element={<EditWorkout workouts={workouts} onUpdateWorkout={handleUpdateWorkout}/>}/>
      </Routes>
    </div>
     
  );
}

export default App;

