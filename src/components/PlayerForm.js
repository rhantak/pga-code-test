import React from "react"

class PlayerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.checkInputs(event)
  }

  checkScore() {
    if(this.state.score > 100 || this.state.score < 0 || !this.state.score ) {
      return false
    } else {
      return true
    }
  }

  checkName() {
    if(!this.state.firstName || !this.state.lastName) {
      return false
    } else {
      return true
    }
  }

  async checkInputs(event) {
    await this.setState({[event.target.name]: event.target.value})
    if (this.checkScore() && this.checkName()) {
      this.setState({disabled:false})
    } else {
      this.setState({disabled:true})
    }
  }

  handleSubmit(event) {
    const newPlayer = this.state
    newPlayer.score = Math.round(newPlayer.score)
    this.props.handleSubmit(newPlayer)
  }

  render() {
    return (
      <div className="PlayerForm">
        <form className="">
          <h2 className="FormTitle">Add a Player</h2>
          <p>
          First Name:
          <input type="text" name="firstName" onChange={this.handleChange} />
          </p>
          <p>
          Last Name:
          <input type="text" name="lastName" onChange={this.handleChange} />
          </p>
          <p>
          Score:
          <input type="number" step="1" name="score" max="100" min="0" onChange={this.handleChange}/>
          </p>
          <button disabled={this.state.disabled} type="button" onClick={this.handleSubmit}>Create Player</button>
          <p>*Players must have a first and <br/> last name and a score between <br/> 0 and 100.</p>
        </form>
      </div>
    )
  }
}

export default PlayerForm
