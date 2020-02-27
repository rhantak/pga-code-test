import React from "react"

function ScoreboardHeader(props) {
  return (
    <div className="ScoreboardHeader">
      <div className="RowData">{props.name}</div>
      <div className="RowData">{props.score}</div>
      <div className="RowData">Delete</div>
    </div>
  )
}

export default ScoreboardHeader
