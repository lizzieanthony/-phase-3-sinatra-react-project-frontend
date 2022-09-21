import { useNavigate, useParams, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import EditWorkout from "./EditWorkout";

const WorkoutInfo = ({workouts, onUpdateWorkout, onWorkoutDelete}) => {
    const navigate = useNavigate()
    const params = useParams()
    const [exerciseName, setExerciseName] = useState([])
    const [instructions, setInstructions] = useState([])
    const [exerciseAdded, setExerciseAdded] = useState(false)
    const [allWorkoutExercises, setAllWorkoutExercises] = useState([])
    const [workout, setWorkout] = useState({
        name: "",
        directions: "",
        exercises: [],
        id: null
    });
    
    useEffect(() => {
        const workout = workouts.find(w => w.id === parseInt(params.id))
        if (workout) {
            setWorkout(workout)
            if (workout.exercises) {
                setAllWorkoutExercises(workout.exercises.map(exercise => {
                        return (
                            // allWorkoutExercises.map(() => <h5 className="exercise">{exercise.name}: <br /> <br />{exercise.instructions}</h5>) 
                            <h5 className="exercise">
                            {exercise.name}: 
                            <br /> <br />
                            {exercise.instructions}
                            </h5> 
                        )
                    }))
            }
        } 
      }, [workouts]);
 
      const handleAddExercise = (e) => {
        e.preventDefault();
        const exercise = {
                name: exerciseName,
                instructions: instructions
         };

        setExerciseAdded(true);
            fetch(`http://localhost:9292/workouts/${workout.id}/exercises`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(exercise)
            })
            .then((r) => r.json())
            .then((newExercise) => {
                const updatedExercises  = [...allWorkoutExercises, <h5 className="exercise">{newExercise.name}: <br /> <br />{newExercise.instructions}</h5>] 
                setAllWorkoutExercises(updatedExercises)
                setExerciseAdded('false')
                navigate(`/workout/${workout.id}`)
            }) 
    };

    function handleWorkoutDeleteClick(workout) {
            fetch(`http://localhost:9292/workouts/${workout.id}`, {
                method: "DELETE",
              })
                .then((r) => r.json())
                .then(() => onWorkoutDelete(workout.id))
                navigate('/')
      }

    return (  
        <div className="workout-info">
          <div>
          <Link to={`/workouts/${workout.id}/edit`}>
          <button className="button" onClick={onUpdateWorkout}>Edit workout</button>
          </Link>
            <h2>{workout.name}'s Workout</h2>
            <h4>{workout.directions}</h4>
            <h5>{allWorkoutExercises}</h5>
            <form className="new" onSubmit={handleAddExercise}>
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
           
            <button className="button" onClick={() => handleWorkoutDeleteClick(workout)}>delete workout</button>
          
          </div>  
        </div>
    );
}
 
export default WorkoutInfo ;