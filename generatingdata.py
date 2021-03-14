#ref: https://google.github.io/mediapipe/solutions/hands#python-solution-api 

import cv2
import time
import gest as gd
import numpy as np
import pickle


if __name__ == "__main__":
    mph = gd.MH(buffer_size=int(5 / 0.05) )
    data = {}
    cur = 0
    hs = ["name"]
    pause_time = 5
    for shape in hs:
        data[shape] = []

    try:
        cap = cv2.VideoCapture(0)
        time.sleep(pause_time)
        while cap.isOpened():

            success, image = cap.read()
            if not success:
                print("Ignoring empty camera frame.")
                continue
            res = mph.run(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))

            curs = hs[cur]
            try:
                data[curs].append(mph.history[-1])
            except IndexError:
                continue

            img = mph.drawlol(image, res)            
            cv2.imshow('MediaPipe Hands', img)
            if cv2.waitKey(5) & 0xFF == 27:
                break

            print(len(data[curs]))
            if len(data[curs]) == 200:
                cur += 1
                if cur == len(hs):
                    raise AssertionError
                else:
                    print(f"Get ready for '{hs[cur]}'")
                    time.sleep(pause_time)
            else:
                time.sleep(frame_delay)
    except:  
        for shape in hs:
            data_array = np.asarray(data[shape])
            with open(f"data_{shape}.p", 'wb') as f:
                pickle.dump(data_array, f)
        mph.close()
        cap.release()
        raise