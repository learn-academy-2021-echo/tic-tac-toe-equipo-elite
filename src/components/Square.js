import React, { Component } from 'react'

class Square extends Component {

  handleClick = () => {
    this.props.handleGamePlay(this.props.index)
    // await this.props.winnerChecker(this.props.playerState)
    // await this.props.changePlayerState()
    // await this.props.draw()
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
