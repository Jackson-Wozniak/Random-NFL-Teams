import React from 'react';
import './styles/App.css';
import findRandomNflTeam from './teams/Team';
import { useState } from "react";
function App() {
    const [team, setTeam] = useState(findRandomNflTeam());
    return (React.createElement("div", { className: "App" },
        React.createElement("div", { className: "output" },
            React.createElement("p", { className: "team name" }, team.name),
            React.createElement("p", { className: "team division" }, team.conference + " " + team.division),
            React.createElement("img", { src: require("./images/" + team.abbrv + ".png"), alt: "", className: "logo" }),
            React.createElement("button", { onClick: () => setTeam(findRandomNflTeam()), className: "new" }, "Find New NFL Team"))));
}
export default App;
