import React from "react";
import Counter from './components/Counter'
import ReactPlayer from 'react-player';


function App() {
  return (
    <div className="App" style={{width: '100%', height: '100%', position: 'absolute'}}>      
      <h1>Mini-Basic Counter in REACT</h1>
      <Counter />

     <ReactPlayer
      url='https://www.youtube.com/watch?v=6k8cpUkKK4c&ab_channel=BrunoMars' 
      width= '50%'
      height= '50%'
      controls
      />
    </div>
  );
}

export default App;
