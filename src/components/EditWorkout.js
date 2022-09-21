import { useState } from "react";

const EditWorkout = ({workouts, onUpdateWorkout}) => {
    const [workoutName, setWorkoutName] = useState('')
    const [overview, setOverview] = useState('');

    const handleWorkoutSubmit = (e) => {
        e.preventDefault();
        const workout = {
            name: workoutName, 
            directions: overview, 
            exercises: [],
         };

         fetch(`http://localhost:9292/workouts/${workout.id}`, {
             method: "PATCH",
             headers: { "Content-Type": "application/json", },
             body: JSON.stringify(workout)
         })
         .then((r) => r.json())
         .then(updatedWorkout => {
             onUpdateWorkout(updatedWorkout)
         })
    };

    return (  
        <div>
        </div>
    );
}
 
export default EditWorkout;