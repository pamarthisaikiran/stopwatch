// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeElapsedInSec: 0,
  }

  onReset = () => {
    this.setState({timeElapsedInSec: 0})
    clearInterval(this.timeInterval)
  }

  onStop = () => {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSec: prevState.timeElapsedInSec + 1,
    }))
  }

  onStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  ummountComponent() {
    clearInterval(this.timeInterval)
  }

  renderSeconds = () => {
    const {timeElapsedInSec} = this.state
    const seconds = Math.floor(timeElapsedInSec % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSec} = this.state
    const minutes = Math.floor(timeElapsedInSec / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="card">
          <div>
            <div className="img-timer">
              <img
                className="img-clock"
                alt="timer"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 testid="timer">{time}</h1>
            <div>
              <button className="button1" type="button" onClick={this.onStart}>
                Start
              </button>
              <button className="button2" type="button" onClick={this.onStop}>
                Stop
              </button>
              <button className="button3" type="button" onClick={this.onReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
