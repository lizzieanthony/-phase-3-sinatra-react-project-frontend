import { useParams } from "react-router-dom";

const WorkoutInfo = () => {
    const {id} = useParams();

    return (  
        <div className="workout-info">
            <h2>Workout Information - {id}</h2>
        </div>
    );
}
 
export default WorkoutInfo ;