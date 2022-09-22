import { useState } from "react";

const EditWorkout = ({workouts, onUpdateWorkout}) => {
    const [workoutName, setWorkoutName] = useState('')
    const [overview, setOverview] = useState('')
    const [allWorkoutExercises, setAllWorkoutExercises] = useState([]);

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
        <div className="new">
            <h2>Edit Workout</h2>
            <form onSubmit={handleWorkoutSubmit}>
                <label>Update The Name:</label>
                <input 
                    type="text"
                    required
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                    />
                <label>Update The Workout Overview and Goals:</label>
                    <textarea
                    required
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    ></textarea>
            </form>
            <h5>{allWorkoutExercises}</h5>
        </div>
    );
}
 
export default EditWorkout;