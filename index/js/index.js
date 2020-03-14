const {ipcRenderer} = require('electron')

$(function(){
    $("button").click(function(){
        //window.location.href='./frame/qqiframe.html'
        ipcRenderer.send('add')
    })

})