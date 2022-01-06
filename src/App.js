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



  handleGamePlay = (index) => {
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
          playerOne: [...this.state.playerOne, index].sort((a, b) => a - b),
        })
      }
      else if (this.state.playerState === 1) {
        squares[index] = "⭕️"
        this.setState({
          playerTwo: [...this.state.playerTwo, index].sort((a, b) => a - b),
        })
      }
      this.setState({ squares: squares })
    }

  }

  changePlayerState = () => {

    if (this.state.playerState === 0) {
      this.setState({ playerState: 1 })
    }
    else if (this.state.playerState === 1) {
      this.setState({ playerState: 0 })
    }
  }

  winnerChecker = (playerState) => {

    let arrayOfHeads = this.state.squares.filter(value => value === "🤯" && true)
    console.log(this.state.playerOne.length + this.state.playerTwo.length)
    console.log(arrayOfHeads.length)

    if (playerState === 0) {
      if (this.state.playerOne.toString().indexOf([0, 1, 2].toString()) !== -1 ||
        this.state.playerOne.toString().indexOf([3, 4, 5].toString()) !== -1 ||
        this.state.playerOne.toString().indexOf([6, 7, 8].toString()) !== -1 ||
        this.state.playerOne.toString().indexOf([0, 3, 6].toString()) !== -1 ||
        this.state.playerOne.toString().indexOf([1, 4, 7].toString()) !== -1 ||
        this.state.playerOne.toString().indexOf([2, 5, 8].toString()) !== -1 ||
        this.state.playerOne.toString().indexOf([0, 4, 8].toString()) !== -1 ||
        this.state.playerOne.toString().indexOf([2, 4, 6].toString()) !== -1) {
        this.setState({ winner: true })
        alert('you won player 1')
        this.reset()
      }
    }
    else if (playerState === 1) {
      if ([0, 1, 2].toString() === this.state.playerTwo.toString() ||
        [3, 4, 5].toString() === this.state.playerTwo.toString() ||
        [6, 7, 8].toString() === this.state.playerTwo.toString() ||
        [0, 3, 6].toString() === this.state.playerTwo.toString() ||
        [1, 4, 7].toString() === this.state.playerTwo.toString() ||
        [2, 5, 8].toString() === this.state.playerTwo.toString() ||
        [0, 4, 8].toString() === this.state.playerTwo.toString() ||
        [2, 4, 6].toString() === this.state.playerTwo.toString()) {
        this.setState({ winner: true })
        alert('you won player 2')
        this.reset()
      }
    }
    // else { console.log("Im here") }

    if (this.state.playerOne.length + this.state.playerTwo.length === 9) {
      console.log("we have a draw")
      alert('We have a draw')
      this.reset()
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
