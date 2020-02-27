import React from 'react'
import './App.css'
import Scoreboard from "./components/Scoreboard"
import PlayerForm from "./components/PlayerForm"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 1,
      players: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(newPlayer) {
    newPlayer.id = this.state.counter
    this.state.counter ++
    this.setState(prevState => {
      const updatedPlayers = [...prevState.players, newPlayer]
      return {players: updatedPlayers}
    })
  }

  render() {
    return (
      <div className="App">
        <div className="ScoreboardContainer">
          <Scoreboard players={this.state.players}/>
        </div>
        <div className="PlayerFormContainer">
          <PlayerForm handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default App
