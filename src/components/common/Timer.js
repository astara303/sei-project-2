//Timer used for testing countdown and has not been actioned yet.
import React from 'react'

class Timer extends React.Component {
  state =  {
    timer: 1000,
    timerRunning: false
  }

  timer = () => setInterval(this.timerFun,10)

  start = () => {
    if (this.state.timerRunning) return
    this.setState({ timer: 1000 })
    this.timer()
  }

  timerFun = () => {
    console.log('run')
    if (this.state.timer <= 10) {
      clearInterval(this.timer())
      this.setState({ timerRunning: false })  
    } else {
      this.setState({ timer: this.state.timer - 10 })
    }  
  }

  render() {
    return  (
      <>
      <h1>{this.state.timer}</h1>
      <button onClick={this.start}>START</button>
      </>
    )
  }

}

export default Timer

