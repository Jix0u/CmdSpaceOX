# CmdSpaceOX

## Overview
A gesture-controlled mouse system with Azure speech input.
!!!!only webcam is need!!!!!
![githubhandges](https://user-images.githubusercontent.com/55889031/111805355-4eecf480-88a7-11eb-9cbe-c321d441e45b.gif)
## Inspiration 
Bad posture and the lack of exercise in the pandemic

## How we built it
Used Python scripts and Mediapipe API to track hand gestures and hand location. Made customize data using the KNN-model and trained the webcam. Then used pyautogui to move mouse with the calculated position values. Used Electron and React for the App interface and Microsoft Azure for Speech Recognition.

## What we learned
Mediapipe API is a great tool! Everyone should try it out sometime :D

## Improvements
Adding more functions
Making the mouse movement smoother
Making user interface more aesthetic
Reducing the delay
