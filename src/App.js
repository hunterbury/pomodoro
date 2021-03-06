import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus, faSync, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus, faSync, faPause, faPlay);

class App extends React.Component {
    state = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25 * 60,
    currentTimer: 'Session',
    isPlaying: false
  }
  constructor(props) {
    super(props);
    this.loop = undefined;
  }
  
  componentWillUnmount() {
   clearInterval(this.loop);
  }
  
  handlePlayPause = () => {
    const { isPlaying } = this.state;
    if(isPlaying) {
      clearInterval(this.loop);
      this.setState({
        isPlaying: false
      });
    } else {
      this.setState({
        isPlaying: true
      });
      this.loop = setInterval (() => {
        const { clockCount, currentTimer, breakCount, sessionCount } = this.state;
        
        if(clockCount === 0) {
          this.setState({
            currentTimer: currentTimer === 'Session' ? 'Break' : 'Session',
            clockCount: (currentTimer === 'Session') ? (breakCount * 60) : (sessionCount * 60)
          });
          
          document.getElementById("beep").play();
        } else {       
          this.setState({
           clockCount: clockCount - 1
        })
        }
      }, 1000);
    }
  }
  
  handleReset = () => {
    this.setState({
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25 * 60,
      currentTimer: 'Session',
      isPlaying: false,
    });
    
    clearInterval(this.loop);
    
    document.getElementById("beep").currentTime = 0;
    document.getElementById("beep").pause();
  }
  
  convertToTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? ('0'+minutes) : minutes;
    seconds = seconds < 10 ? ('0'+seconds) : seconds;
    return `${minutes}:${seconds}`;
  }
  
  handleLengthChange = (count, timerType) => {
    const { 
      sessionCount, 
      breakCount, 
      isPlaying, 
      currentTimer
    } = this.state;
    
    let newCount;
    
    if(timerType === 'session') {
      newCount = sessionCount + count;
    } else {
      newCount = breakCount + count;
    }
    
    if(newCount > 0 && newCount < 61 && !isPlaying) {
      this.setState({
        [`${timerType}Count`]: newCount
      });
      
      if(currentTimer.toLowerCase() === timerType) {
        this.setState({
          clockCount: newCount * 60
        })
      }
    }
  }
  
  render() {
    const {
      breakCount,
      sessionCount,
      clockCount,
      currentTimer,
      isPlaying
    } = this.state;
    
    const breakProps = {
      title: 'Break',
      count: breakCount,
      handleDecrease: () => this.handleLengthChange(-1, 'break'),
      handleIncrease: () => this.handleLengthChange(1, 'break')
    }
    
    const sessionProps = {
      title: 'Session',
      count: sessionCount,
      handleDecrease: () => this.handleLengthChange(-1, 'session'),
      handleIncrease: () => this.handleLengthChange(1, 'session'),
    }
    
    return  (
      <div>
        <div className="title">
          <h1>Pomodoro Clock</h1>
        </div> <br /> <br />
       <div className="flex">
        <SetTimer  {...breakProps} />
        <SetTimer {...sessionProps} />
       </div>
       <div className="clock-container">
         <h1 id="timer-label">{currentTimer}</h1>
         <span id="time-left">{this.convertToTime(clockCount)}</span>
         <audio id="beep" src="https://www.pacdv.com/sounds/interface_sound_effects/sound10.mp3" type="audio/mp3" />
         <div className="flex">
          <button id="start_stop" onClick={this.handlePlayPause}>
            <FontAwesomeIcon icon={`${isPlaying ? 'pause' : 'play'}`} />
          </button>
          <button id="reset" onClick={this.handleReset}>
            <FontAwesomeIcon icon="sync" />         
          </button>         
         </div>
       </div>
     </div>
    );
  }
}

const SetTimer = (props) => {
  const id = props.title.toLowerCase();
  return (
    <div className="timer-container">
      <h2 id={`${id}-label`}>{props.title} Length</h2>
      <div className="flex actions-wrapper">
        <button id={`${id}-decrement`} onClick={props.handleDecrease}>
        <FontAwesomeIcon icon="minus" />        
        </button>
        <span id={`${id}-length`}>{props.count}</span>
        <button id={`${id}-increment`} onClick={props.handleIncrease}>
          <FontAwesomeIcon icon="plus" />        
        </button>
      </div>
    </div>
  );
}

export default App