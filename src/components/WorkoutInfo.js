import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";

const WorkoutInfo = ({workouts, setWorkouts}) => {
    const navigate = useNavigate()
    const params = useParams();
    const [workoutdelete, setWorkoutdelete] = useState([]);
    const [workout, setWorkout] = useState({
        name: "",
        directions: "",
        exercises: [{
            name: "",
            instructions: "",
        }]
    })
    const [exerciseName, setExerciseName] = useState([])
    const [instructions, setInstructions] = useState([])
    const [exerciseAdded, setExerciseAdded] = useState(false)
    const [allWorkoutExercises, setAllWorkoutExercises] = useState([])

    useEffect(() => {
        const workout = workouts.find(w => w.id === parseInt(params.id))
        if (workout) {
            setWorkout(workout)
            if (workout.exercises) {
                setAllWorkoutExercises(workout.exercises.map(exercise => {
                        return (
                            <h5 className="exercise">{exercise.name}: <br /> <br />{exercise.instructions}</h5> 
                        )
                    }))
            }
        } 
      }, [workouts]);
 
      const handleSubmit = (e) => {
        e.preventDefault();
        const exercise = {
            exercises: [{
                name: exerciseName,
                instructions: instructions,
            }],
         };

        setExerciseAdded(true);
            fetch(`http://localhost:9292/workouts/${workout.id}`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(exercise)
            })
            .then((r) => r.json())
            .then((workoutInfo) => {
                const updatedExercises = [...workouts, workoutInfo]
                setWorkouts(updatedExercises)
                setExerciseAdded('false')
                // navigate('/')
            }) 
    };

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
            <h5>{allWorkoutExercises}</h5>
            <form className="new">
                <label >Exercise Name:</label>
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
                <button className="button">add exercise to workout</button>
                </form>
            <br />
            <button className="button" onClick={() => handleWorkoutDeleteClick(workout)}>delete this workout</button>
          </div>  
        </div>
    );
}
 
export default WorkoutInfo ;