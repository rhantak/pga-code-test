import React from "react"
import ScoreboardRow from "./ScoreboardRow"
import ScoreboardHeader from "./ScoreboardHeader"

function Scoreboard(props) {
  const playerComponents = props.players.map(player => {
  return (
    <ScoreboardRow firstName={player.firstName} lastName={player.lastName} score={player.score} />
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
      <ScoreboardHeader name="Player" score= "Score"/>
      {playerComponents}
    </div>
  )
}

export default Scoreboard
