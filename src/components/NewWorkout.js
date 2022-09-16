import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewWorkout = () => {
    const [workoutName, setWorkoutName] = useState('')
    const [overview, setOverview] = useState('')
    const [exerciseName, setExerciseName] = useState([])
    const [instructions, setInstructions] = useState([])
    const [workoutAdded, setworkoutAdded] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const workout = {name: workoutName, directions: overview, exerciseName, instructions};
        debugger
    fetch("http://localhost:9292/workouts", {
        method: 'POST',
        headers: {"Content-Type": "application'json"},
        body: JSON.stringify(workout)
    }).then(() => {
        console.log('new workout')
        setworkoutAdded('false')
        navigate.push('/')
      })
    }
    return (  
        <div className="new">
            <h2>Add a New Workout</h2>
            <form onSubmit={handleSubmit}>
                <label>Your Name:</label>
                <input 
                    type="text"
                    required
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                    />
                <label>Workout Overview and Goals:</label>
                    <textarea
                    required
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    ></textarea>
                <label>Exercise Name:</label>
                    <input 
                        type="text"
                        required
                        value={exerciseName}
                        onChange={(e) => setExerciseName(e.target.value)}
                        />
                <label>Exercise Instructions:</label>
                    <textarea
                    required
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    ></textarea>
                    {/* if the first is false the second will output */}
                    {!workoutAdded && <button>Add Workout</button>}
                    {workoutAdded && <button className="submitted">Workout Added</button>}
            </form>
            {/* <p>{workoutName}</p>
            <p>{overview}</p>
            <p>{exerciseName}</p>
            <p>{instructions}</p> */}
        </div>
        
    );
}
 
export default NewWorkout;