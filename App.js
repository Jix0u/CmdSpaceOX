import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import GestureMatcher from './components/GestureMatch';
import DiscreteSlider from './components/Slider';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import ModificationTile from './components/ModificationTile';

export default function App() {
  
  const one = "/Users/leonachen/mediapipe/CmdSpaceOX/vidsimgs/imgs/CmdSpaceOX.png";
  const two = "C:\\Users\\angel\\Downloads\\Swipe\\src\\js\\MotionGIFS\\squeeze.gif";
  const three = "C:\\Users\\angel\\Downloads\\Swipe\\src\\js\\MotionGIFS\\spiderman.gif";
  const four = "C:\\Users\\angel\\Downloads\\Swipe\\src\\js\\MotionGIFS\\scroll.gif";
  const five = "C:\\Users\\angel\\Downloads\\Swipe\\src\\js\\MotionGIFS\\slap.gif";
  const six = "C:\\Users\\angel\\Downloads\\Swipe\\src\\js\\MotionGIFS\\call.gif";

 
  //let data = `{"Rock":${rock}, "Peace":${peace}, "MouseSensitivity":${mousesen}, "ScrollSensitivity":${scrollsen}}`;
  
return (

    <>
      <GestureMatcher />

  <div className="modification-tiles">
      <ModificationTile setcommand={setRock} className="modification-indv-tile" set={"Mouse Movement"} theges={"Palm"} gestureDescription={"Move palm to control the mouse"} setSelected={setSelected} thepath={thepath1} selectedOptions={selectedOptions}/>
      <ModificationTile setcommand={setRock} className="modification-indv-tile"set={"Click"} theges={"Palm Open, Palm Close"} gestureDescription={"Go from open to close palm to click"} setSelected={setSelected} thepath={thepath2} selectedOptions={selectedOptions}/>
      <ModificationTile setcommand={setRock} className="modification-indv-tile" set={2} theges={"Rock"} gestureDescription={"Do the rock sign to perform associated action"} setSelected={setSelected} thepath={thepath3} selectedOptions={selectedOptions}/>
      <ModificationTile setcommand={setPeace} className="modification-indv-tile" set={2} theges={"Peace"} gestureDescription={"Do the peace sign to perform associated action"} setSelected={setSelected} thepath={thepath4} selectedOptions={selectedOptions}/>
      <ModificationTile setcommand={setRock} className="modification-indv-tile" set={"Change Tabs"} gestureDescription={""} theges={"Swipe"} gestureDescription={"Perform horizontal swipe to switch between two windows and vertical swipe to shift between all windows"} setSelected={setSelected} thepath={thepath5} selectedOptions={selectedOptions}/>
      <ModificationTile setcommand={setRock} className="modification-indv-tile" set={"Speech Input"} theges={"Call"} gestureDescription={"Make call sign to activate voice input"} setSelected={setSelected} thepath={thepath6} selectedOptions={selectedOptions}/>
      </div>

      <div>
        <DiscreteSlider setscroll={setscroll} setmouse={setmouse}/>
      </div>
      <Button variant="contained" color="primary" onClick={() => {

        electron.notificationApi.sendNotification('Your gesture preferences have been updated.');
        processSayingHi();
      }}>Save Preferences and Start</Button>
      <div>
      </div>

      
    </>
  )
}
