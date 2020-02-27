import React from 'react'
import './App.css'
import Scoreboard from "./components/Scoreboard"

function App() {
  const testPlayers = [
    {firstName:"Ryan", lastName:"Hantak", score:78},
    {firstName:"John", lastName:"Smith", score:77},
    {firstName:"Jane", lastName:"Doe", score:77}

  ]
  return (
    <div className="App">
      <Scoreboard players={testPlayers}/>
    </div>
  )
}

export default App
