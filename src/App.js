import React from "react"; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import NewWorkout from "./components/NewWorkout";

const App = () => {
  return (
    <>
     <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/NewWorkout" element={<NewWorkout />}/>
      </Routes>
    </>

  // <Routes>
  //   <div className="App">
  //     <Navbar />
  //     <div className="content">
  //         <Route exact path="/" element={<Home />}/>
  //     </div>
  //   </div>
  // </Routes>
  );
}

export default App;
