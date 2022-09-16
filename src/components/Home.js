import React, { useState, useEffect} from "react";
import WorkoutList from "./WorkoutList";
// import WorkoutInfo from "./WorkoutInfo"

const Home = () => {
   const [workouts, setWorkouts] = useState(null)

   useEffect(() => {
    fetch("http://localhost:9292/workouts")
      .then((r) => r.json())
      .then((workouts) => setWorkouts(workouts));
  }, []);


    return ( 
        <div className="home">
            {workouts && <WorkoutList workouts={workouts} header="All Workouts"/>}
        </div>
     );
}
 
export default Home;