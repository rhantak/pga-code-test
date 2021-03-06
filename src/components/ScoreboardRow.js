import React from "react"

function ScoreboardRow(props) {
  return (
    <div className="ScoreboardRow">
      <div className="RowData">{props.lastName}, {props.firstName}</div>
      <div className="RowData">{props.score}</div>
      <div className="RowData"><button type="button" onClick={() => props.handleDelete(props.id)}>Delete</button></div>
    </div>
  )
}

export default ScoreboardRow
