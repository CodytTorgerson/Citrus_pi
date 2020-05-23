# Citrus_pi
Repository containing all relevant code to my raspberry pi automated gardening system project. 

# Configure Raspberry Pi

Step 1: Flash the raspberry pi with linux 20.04 lts.  
Step 2: Change the network config file to contain the wifi network information
        for example:
```sh
        version: 2
        ethernets:
          eth0:
            dhcp4: true
            optional: true
        wifis:
          wlan0:
            dhcp4: true
            optional: true
            access-points:
              "Homenetwork":
                 password: "Verystronkpassword:)"
              Backupnetowrk:
                password: "Anotherverystronkpassword"
```
Step 3: Boot up Raspberry pi while connected to ethernet.

Step 4: Login and change the root password.
        use command su root to login and su root passwd
        
Step 5: ```sudo ifconfig wlan0 up```.

Step 6: If not connected to WIFI then run ```sudo iwlist wlan0 scan``` and then ```sudo iwconfig wlan0 essid homenetwork key verystronkpassword```.
