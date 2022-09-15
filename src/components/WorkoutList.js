
const  WorkoutList = (props) => {
    const workouts = props.workouts;
    
    return ( 
        <div className="workout-list">
            {workouts.map((workout) => (
                <div className="workout-preview" key={workout.id}> 
                    <h2>{workout.name}'s Workout</h2>
                    <p>{workout.directions}</p>
                    <br></br>
                </div>
            ))}
        </div>
     );
}
 
export default WorkoutList;