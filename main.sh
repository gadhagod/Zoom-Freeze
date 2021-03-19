ping -c 1 google.com
if [[ $? == 0 ]]; then # if wifi is up
    networksetup -setairportpower Wi-Fi off
else # wifi is down
    networksetup -setairportpower Wi-Fi on
fi