import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      playerState: 0,
      playerOne: [],
      playerTwo: [],
      winner: false
    }
  }

  // handleClick = (index) => {
  //   this.handleGamePlay(index)
  //   this.winnerChecker()
  // }

  handleGamePlay = (index) => {
    const { squares } = this.state;

    if (this.state.playerState === 0) {
      squares[index] = "❌"
      this.setState({
        playerOne: [...this.state.playerOne, index].sort((a, b) => a - b),
        playerState: 1
      })
    }
    else if (this.state.playerState === 1) {
      squares[index] = "⭕️"
      this.setState({
        playerTwo: [...this.state.playerTwo, index].sort((a, b) => a - b),
        playerState: 0
      })
    }
    this.setState({ squares: squares })

  }



  winnerChecker = (playerState) => {
    if (playerState === 1) {
      if ([0, 1, 2].toString() === this.state.playerTwo.toString()) {
        this.setState({ winner: true })
        alert('you won player 2')
      }

    }
    else if (playerState === 0) {
      if ([0, 1, 2].toString() === this.state.playerOne.toString()) {
        this.setState({ winner: true })
        alert('you won player 1')
      }

    }
  }

  // else if () { }
  // else if () { }
  // else if () { }
  // else if () { }
  // else if () { }
  // else if () { }
  // else if () { }



  //[0, 1, 2]
  //[3, 4, 5]
  //[6, 7, 8]

  //1. 0,1,2
  //2. 3,4,5
  //3. 6,7,8
  //4. 0,3,6
  //5. 1,4,7
  //6. 2,5,8
  //7. 0,4,8
  //8. 2,4,6
  //Create an array for each player
  //Check for possible solutions - combo

  render() {


    return (
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameBoard">
          {this.state.squares.map((value, index) => {
            return (<Square
              handleGamePlay={this.handleGamePlay}
              winnerChecker={this.winnerChecker}
              index={index}
              key={index}
              value={value}
              playerState={this.state.playerState}
            />)
          })}
        </div>

      </>
    )
  }
}
export default App
