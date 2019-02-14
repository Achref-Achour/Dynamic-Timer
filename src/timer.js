import React, { Component } from 'react';
import './timer.css';

var v=754210;

function Timercalcul(props) {
  var x=props.val;
  
  var vh=Math.floor(x / 3600000)
  var vm=Math.floor((x - (vh * 3600000)) / 60000)
  var vs=parseInt((x - (vh * 3600000) - (vm * 60000)) / 1000)
 
   
       return (
        <div className="time">
            <div>{vs}</div>
            <div>:</div>
            <div>{vm}</div>
            <div>:</div>
            <div>{vh}</div>
        </div>
       )}
   


class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <Timercalcul val={v}/>
        <div className="time-text">
                  <div className="text">Hour</div>
                  <div className="text">Minute</div>
                  <div className="text">Second</div>
        </div>
      </div>
    );
  }
}

export default Timer;
