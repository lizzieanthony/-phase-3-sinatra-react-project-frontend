import { useState } from "react";
import {useNavigate, useParams} from "react-router-dom"

const EditWorkout = ({workouts, onUpdateWorkout}) => {
    const navigate = useNavigate()
    const [workoutName, setWorkoutName] = useState('')
    const [overview, setOverview] = useState('')
    const [allWorkoutExercises, setAllWorkoutExercises] = useState([])
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
                <label>Update The Name:  <br/> <br/>
                {workouts.map((workouts) =>{return ( <h5>{workouts.name}</h5>)})} </label>
                <input 
                    type="text" 
                    required
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                    />
                <label>Update The Workout Overview and Goals: <br/> <br/>{workouts[0].directions}</label>
                    <textarea 
                    required
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    ></textarea>
                    <button className="button">save workout</button>
            </form>
            <h5>{allWorkoutExercises}</h5>
           
        </div>
    );
}
 
export default EditWorkout;

// {workouts.map((workouts) => workouts.id).name}