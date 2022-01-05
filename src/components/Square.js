import React, { Component } from 'react'

class Square extends Component {

  handleClick = () => {

    this.props.handleGamePlay(this.props.index)
    this.props.winnerChecker(this.props.playerState)
  }


  render() {
    return (
      <>
        <div onClick={this.handleClick} className="square">{this.props.value}</div>
      </>
    )
  }
}
export default Square
