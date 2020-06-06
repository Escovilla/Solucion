import  pyautogui
import  time

comments = ["na detsect",
"hahahha",
"nadetect",
"randim comment",
"its me comment",
"im a comment", 
"naniiiiii",
"wew",
"im a python script",
"script ni siya",
"scrip0000000",
"detct"  ]

time.sleep(5)

for i in range(50):
    print("im working",[i])
    
    pyautogui.typewrite(comments[i%11])
    pyautogui.typewrite("\n")
    time.sleep(25)
    
    

