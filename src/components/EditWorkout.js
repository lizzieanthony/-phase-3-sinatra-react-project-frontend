import { useState } from "react";
import {useNavigate, useParams} from "react-router-dom"

const EditWorkout = ({workouts, onUpdateWorkout}) => {
    const navigate = useNavigate()
    const [workoutName, setWorkoutName] = useState('')
    const [overview, setOverview] = useState('')
    const [workoutUpdated, setworkoutUpdated] = useState(false)
    const params = useParams()

    const handleWorkoutSubmit = (e) => {
        e.preventDefault();
        const workout = {
            name: workoutName, 
            directions: overview, 
            id: params.id
         };

         setworkoutUpdated (true);
         fetch(`http://localhost:9292/workouts/${workout.id}`, {
             method: "PATCH",
             headers: { "Content-Type": "application/json", },
             body: JSON.stringify(workout)
         })
         .then((r) => r.json())
         .then(updatedWorkout => {
             onUpdateWorkout(updatedWorkout)
             setworkoutUpdated ('false')
            navigate(`/workouts/${workout.id}`)
         })
    };

    return (  
        <div className="new">
            <h2>EditWorkout </h2>
            <form onSubmit={handleWorkoutSubmit}>
                <label >current name: {workouts.find(w => w.id === parseInt(params.id)).name}</label>
                <br/>
                 <label className="updated">Updated Name:</label>
                <input 
                    type="text" 
                    required
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                    />
                <label>Current Workout Overview: {workouts.find(w => w.id === parseInt(params.id)).directions} </label>
                <br/> 
                <label className="updated">Updated Workout Overview:</label>
                    <textarea 
                    required
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    ></textarea>
                    <button className="button">save workout</button>
            </form>  
        </div>
    );
}
 
export default EditWorkout;
