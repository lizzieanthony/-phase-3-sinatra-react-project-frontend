import WorkoutList from "./WorkoutList";

const Home = ({workouts}) => {


    return ( 
        <div className="home">
            {workouts && <WorkoutList workouts={workouts} header="All Workouts"/>}
        </div>
     );
}
 
export default Home;