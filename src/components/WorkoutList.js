import {Link} from "react-router-dom";

const  WorkoutList = ({workouts, header}) => {
    
    return ( 
        <div className="workout-list">
            <h2>{header}</h2>
            {workouts.map((workout) => (
                <div className="workout-preview" key={workout.id}> 
                    <Link to={`/workouts/${workout.id}`}>
                    <h2>{workout.name}'s Workout</h2>
                    <p>{workout.directions}</p>
                    <br></br>
                    </Link>
                    
                </div>
                
            ))}
        </div>
     );
}
 
export default WorkoutList;