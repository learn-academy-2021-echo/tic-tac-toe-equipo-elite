import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: ["🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯"],
      playerState: 0,
      playerOne: [],
      playerTwo: [],
      winner: false
    }
  }



  //State that will update and track changes 
  /*Set up the logic for the board game by creating and updating*/
  handleGamePlay = (index) => {
    this.winnerChecker(this.state.playerState)


    const { squares } = this.state;
    if (squares[index] === "❌" || squares[index] === "⭕️") {
      alert("Pick Another Square!!!")
      if (this.state.playerState === 0) {
        this.setState({ playerState: 1 })
      }
      else {
        this.setState({ playerState: 0 })
      }
    }
    else {
      if (this.state.playerState === 0) {
        squares[index] = "❌"

        this.setState({
          playerOne: [...this.state.playerOne, index]
        })
      }
      else if (this.state.playerState === 1) {
        squares[index] = "⭕️"
        this.setState({
          playerTwo: [...this.state.playerTwo, index]
        })
      }
      this.setState({ squares: squares })
    }

    this.draw()
    this.changePlayerState()

  }


  //Changes the player turn
  changePlayerState = () => {

    if (this.state.playerState === 0) {
      this.setState({ playerState: 1 })
    }
    else if (this.state.playerState === 1) {
      this.setState({ playerState: 0 })
    }
  }

  //Checks for a winner or a draw 
  winnerChecker = (playerState) => {

    if (playerState === 0 && this.state.playerOne.length + this.state.playerTwo.length !== 9) {
      let player1 = this.state.playerOne
      if (player1.includes(0) && player1.includes(1) && player1.includes(2)) {
        this.setState({ winner: true })
        alert('you won player 1')
        this.reset()
      }
      else if (player1.includes(3) && player1.includes(4) && player1.includes(5)) {
        this.setState({ winner: true })
        alert('you won player 1')
        this.reset()
      }
      else if (player1.includes(6) && player1.includes(7) && player1.includes(8)) {
        this.setState({ winner: true })
        alert('you won player 1')
        this.reset()
      }
      else if (player1.includes(0) && player1.includes(3) && player1.includes(6)) {
        this.setState({ winner: true })
        alert('you won player 1')
        this.reset()
      }
      else if (player1.includes(1) && player1.includes(4) && player1.includes(7)) {
        this.setState({ winner: true })
        alert('you won player 1')
        this.reset()
      }
      else if (player1.includes(2) && player1.includes(5) && player1.includes(8)) {
        this.setState({ winner: true })
        alert('you won player 1')
        this.reset()
      }
      else if (player1.includes(0) && player1.includes(4) && player1.includes(8)) {
        this.setState({ winner: true })
        alert('you won player 1')
        this.reset()
      }
      else if (player1.includes(2) && player1.includes(4) && player1.includes(6)) {
        this.setState({ winner: true })
        alert('you won player 1')
        this.reset()
      }
    }
    else if (playerState === 1 && this.state.playerOne.length + this.state.playerTwo.length !== 9) {
      let player2 = this.state.playerTwo
      if (player2.includes(0) && player2.includes(1) && player2.includes(2)) {
        this.setState({ winner: true })
        alert('you won player 2')
        this.reset()
      }
      else if (player2.includes(3) && player2.includes(4) && player2.includes(5)) {
        this.setState({ winner: true })
        alert('you won player 2')
        this.reset()
      }
      else if (player2.includes(6) && player2.includes(7) && player2.includes(8)) {
        this.setState({ winner: true })
        alert('you won player 2')
        this.reset()
      }
      else if (player2.includes(0) && player2.includes(3) && player2.includes(6)) {
        this.setState({ winner: true })
        alert('you won player 2')
        this.reset()
      }
      else if (player2.includes(1) && player2.includes(4) && player2.includes(7)) {
        this.setState({ winner: true })
        alert('you won player 2')
        this.reset()
      }
      else if (player2.includes(2) && player2.includes(5) && player2.includes(8)) {
        this.setState({ winner: true })
        alert('you won player 2')
        this.reset()
      }
      else if (player2.includes(0) && player2.includes(4) && player2.includes(8)) {
        this.setState({ winner: true })
        alert('you won player 2')
        this.reset()
      }
      else if (player2.includes(2) && player2.includes(4) && player2.includes(6)) {
        this.setState({ winner: true })
        alert('you won player 2')
        this.reset()
      }
    }
  }

  draw = () => {
    this.winnerChecker()
    let drawArray = [...this.state.squares].filter(value => value === "🤯")
    console.log(drawArray)
    if (drawArray.length === 0) {
      alert('We have a draw')
    }
  }


  reset = () => {
    this.setState({
      squares: ["🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯", "🤯"],
      playerState: 0,
      playerOne: [],
      playerTwo: [],
      winner: false
    })
  }


  render() {


    return (
      <>
        <h1>Tic Tac Toe</h1>
        <h2>{this.state.playerState === 0 ? "Player 1 turn" : "Player 2 turn"}</h2>
        <div className="reset-button"><button onClick={this.reset}>Reset</button></div>
        <div className="gameBoard">
          {this.state.squares.map((value, index) => {
            return (<Square
              handleGamePlay={this.handleGamePlay}
              winnerChecker={this.winnerChecker}
              draw={this.draw}
              index={index}
              key={index}
              value={value}
              playerState={this.state.playerState}
              changePlayerState={this.changePlayerState}
            />)
          })}
        </div>
      </>
    )
  }
}
export default App

// await this.props.winnerChecker(this.props.playerState)
// await this.props.changePlayerState()
// await this.props.draw()