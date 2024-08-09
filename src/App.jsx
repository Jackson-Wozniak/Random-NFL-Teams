import React from 'react';
import './styles/App.css';
import findRandomNflTeam from './utils/Team';
import {useState} from "react";

function App() {
  const [team, setTeam] = useState(findRandomNflTeam());

  return (
    <div className="App">
      <div className="output">
        <p className="team name">{team.name}</p>
        <p className="team division">{team.conference + " " + team.division}</p>
        <img
          src={require("./images/" + team.abbrv + ".png")}
          alt=""
          className="logo"
        />
        <button onClick={() => setTeam(findRandomNflTeam())} className="new">Find New NFL Team</button>
      </div>
    </div>
  );
}

export default App;