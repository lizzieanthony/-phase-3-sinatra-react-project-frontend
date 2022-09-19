import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";

const WorkoutInfo = ({workouts}) => {
    const navigate = useNavigate()
    const params = useParams();
    const [workoutdelete, setWorkoutdelete] = useState([]);
    const [workout, setWorkout] = useState({
        name: "",
        directions: "",
        exercises: []
    })

    useEffect(() => {
        const workout = workouts.find(w => w.id === parseInt(params.id))
        if (workout) {
            setWorkout(workout)
        } 
      }, [workouts]);

      const allWorkoutExercises = workout.exercises.map(exercise => {
          return (
              <h5 className="exercise">{exercise.name}: <br /> <br />{exercise.instructions}</h5> 
          )
      })

      function handleWorkoutDeleteClick(workout) {
        fetch(`http://localhost:9292/workouts/${workout.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleteWorkout(workout))
          navigate('/') 
      }
    
      function handleDeleteWorkout(deletedWorkout) {
        const updatedWorkouts = workoutdelete.filter((workout) => workout.id !== deletedWorkout.id)
        setWorkoutdelete(updatedWorkouts)
      }
      

    return (  
        <div className="workout-info">
            <div>
            <h2>{workout.name}'s Workout</h2>
                <h4>{workout.directions}</h4>
                {/* <h4>{workout.exercises.map((exercise) => <h4>{exercise.name}</h4>)}</h4> */}
                <h5>{allWorkoutExercises}</h5>
                <button className="delete" onClick={() => handleWorkoutDeleteClick(workout)}>delete workout</button>
            </div>
            
           
            
        </div>
    );
}
 
export default WorkoutInfo ;