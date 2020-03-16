// Modules to control application life and create native browser window
const {app, BrowserWindow,Menu,ipcMain} = require('electron')
const path = require('path')
let mainWindow
function createWindow () {
  Menu.setApplicationMenu(null)
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 400,
    height: 700,
    frame:false,
    titleBarStyle:'hidden',
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.webContents.openDevTools()
  // and load the index.html of the app.
  //mainWindow.loadFile('index/index.html')
  mainWindow.loadFile('frame/qqiframe.html')
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
let newwin
ipcMain.on('add',()=>{
  newwin = new BrowserWindow({
    width: 800, 
    height: 600,
    frame:false,
    parent: mainWindow, //win是主窗口
  })
  newwin.loadURL(path.join('file:',__dirname,'frame/qqiframe.html')); //new.html是新开窗口的渲染进程
  newwin.on('closed',()=>{newwin = null})
})