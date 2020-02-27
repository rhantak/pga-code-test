import React from "react"
import ScoreboardRow from "./ScoreboardRow"
import ScoreboardHeader from "./ScoreboardHeader"

class Scoreboard extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = props.handleDelete.bind(this)
  }
  render(){
    const playerComponents = this.props.players.map(player => {
    return (
      <ScoreboardRow id={player.id} firstName={player.firstName} lastName={player.lastName} score={player.score} handleDelete={this.props.handleDelete} />
      )
    })

    playerComponents.sort(function(a,b) {
      var playerA = a.props.lastName.toUpperCase()
      var playerB = b.props.lastName.toUpperCase()

      return (playerA < playerB) ? -1 : (playerA > playerB) ? 1 : 0;
    })

    playerComponents.sort(function(a,b) {
      var playerA = a.props.score
      var playerB = b.props.score

      return (playerA > playerB) ? -1 : (playerA < playerB) ? 1 : 0;
    })

    return (
      <div className="Scoreboard">
        <ScoreboardHeader/>
        {playerComponents}
      </div>
    )
  }
}

export default Scoreboard
