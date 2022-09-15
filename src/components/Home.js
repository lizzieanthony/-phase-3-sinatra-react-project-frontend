import React, { useState} from "react";
import WorkoutList from "./WorkoutList";

const Home = () => {
   const [workouts, setWorkouts] = useState([
    {name: "Monday", directions: "Light Endurance and strength day. 30 min of endurance and 5 sets of strength training.", id: 1},
    {name: "Tuesday", directions: "Light Endurance and strength day. 30 min of endurance and 5 sets of strength training.", id: 2}
   ])
    // const [workouts, setWorkouts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:9292/workouts")
    //       .then((r) => r.json())
    //       .then((workouts) => setWorkouts(workouts));
    //   }, []);


    return ( 
        <div className="home">
            <WorkoutList workouts={workouts}/>
        </div>
     );
}
 
export default Home;