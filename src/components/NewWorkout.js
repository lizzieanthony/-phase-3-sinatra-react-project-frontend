const NewWorkout = ({workouts}) => {
    return (  
        <div className="new">
            <h2>Add a New Workout</h2>
            <form>
                <label>Your Name:</label>
                <input 
                    type="text"
                    required
                    />
                <label>Workout Overview:</label>
                    <textarea
                    required
                    ></textarea>
                <label>Exercise Name:</label>
                    <input 
                        type="text"
                        required
                        />
                <label>Exercise Instructions:</label>
                    <textarea
                    required
                    ></textarea>
                    <button>Add Workout</button>
            </form>
        </div>
        
    );
}
 
export default NewWorkout;