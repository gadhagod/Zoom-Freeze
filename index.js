const { app, BrowserWindow, globalShortcut } = require('electron')
const { exec } = require("child_process");
const path = require('path')

app.whenReady().then(() => {
    globalShortcut.register('CommandOrControl+J', () => {
        exec(`ping -c 1 google.com
        if [[ $? == 0 ]]; then # if wifi is up
            networksetup -setairportpower Wi-Fi off
        else # wifi is down
            networksetup -setairportpower Wi-Fi on
        fi`)
    })
})