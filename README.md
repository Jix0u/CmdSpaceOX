# CmdSpaceOX

## Overview
A gesture-controlled mouse system with Azure speech input.
!!!!only webcam is need!!!!!
![githubhandges](https://user-images.githubusercontent.com/55889031/111805355-4eecf480-88a7-11eb-9cbe-c321d441e45b.gif)
## Inspiration 
As of the recent pandemic, the issue of bad posture and the lack of exercise has resurfaced as many are stuck inside and hunched over their computer. As such, we created "CmdSpaceOX' a gesture-controlled mouse system in hopes of reducing posture related pains (back, shoulder, arm, etc.) and encourage exercise even by the computer.

## How we built it
- Used **Python** scripts and Google's **Mediapipe API** to track hand gestures and the relative hand location. Made customize data using the **KNN-model** and trained with machine learning
- Used **pyautogui** to move mouse with the calculated position values, and add specific functions for each hand gesture (one = new tab, back-palm = close tab, two = scroll, etc.)
- Used **Electron** and **React** for the App interface and **Microsoft** **Azure** for Speech Recognition.

## Challenges
- Understanding how to use Mediapipe in order to track gestures (compliling custom data using **Pickle** and generating shapes)
- Understanding how to use pyautogui to control the computer
- Learning electron and react documentation 


## What we learned
Mediapipe API is a great tool! Everyone should try it out sometime :D

## Improvements
- Adding more functions
- Making the mouse movement smoother
- Making user interface cleaner
- Reducing the delay

## Credits
- Mediapipe python solution github
- Basic electron application by flipjerga
