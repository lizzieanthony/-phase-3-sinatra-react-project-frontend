import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewWorkout = () => {
    const [workoutName, setWorkoutName] = useState('')
    const [overview, setOverview] = useState('')
    const [workoutAdded, setworkoutAdded] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setworkoutAdded(true);
            fetch("http://localhost:9292/workouts", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: workoutName, 
                    directions: overview, 
                    exercises: []
                })
            }).then(() => {
                console.log('new workout')
                // debugger
                setworkoutAdded('false')
                navigate('/')
            }) 
    };
        // debugger

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
                {!workoutAdded && <button>Add Workout</button>}
            </form>
        </div>
        
    );
}
 
export default NewWorkout;