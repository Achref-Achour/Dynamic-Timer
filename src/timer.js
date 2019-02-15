import React, { Component } from 'react';
import './timer.css';

function Timercalcul(props) {
  var x=props.val;
  
  var vh=Math.floor(x / 3600000)
  var vm=Math.floor((x - (vh * 3600000)) / 60000)
  var vs=parseInt((x - (vh * 3600000) - (vm * 60000)) / 1000)
 
   
       return (
        <div className="time">
            <div>{String(vh).padStart(2, "0")}</div>
            <div>:</div>
            <div>{String(vm).padStart(2, "0")}</div>
            <div>:</div>
            <div>{String(vs).padStart(2, "0")}</div>
        </div>
       )}



class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0,
      status:false,
    }
                   
                        setInterval(
                        () => {
                          if (this.state.status){
                            // this.state.timer ++
                            this.setState({
                              timer: this.state.timer + 1000
                            })
                        }},
                        1000
                        )
                      }

                          StateChange =
                            () => { 
                              this.setState({status: !this.state.status})
                            }
                          StateReset =
                          () => { 
                            this.setState({timer: 0,status:false})
                          }
  
  render() {
    return (
      <div className="timer">
        <Timercalcul val={this.state.timer}/>
        <div className="time-text">
                  <div className="text">Hour</div>
                  <div className="text">Minute</div>
                  <div className="text">Second</div>
        </div>
          <div className="button-flex">
                <div><button onClick={this.StateChange} className="button5">Pause</button></div>
                <div><button onClick={this.StateReset} className="button5">Reset</button></div>
          </div>
      </div>
    );
  }
}

export default Timer;
