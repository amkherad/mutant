import { app, BrowserWindow } from "electron";
import { ServiceContainer } from "./services/ServiceContainer";
import { AppWindow } from "./views/AppWindow";
import { HttpInterface } from "./services/interface/HttpInterface";
import { UIResourceDriver } from "./services/interface/UIResourceDriver";
import { ServiceCollection } from "./services/interface/ServiceCollection";
import path from 'path';
import { isNumber } from "util";


const uiDirName = path.join(__dirname, 'ui');


ServiceContainer.configure();


let mainWindow: Electron.BrowserWindow | null = null;
let httpInterface: HttpInterface | null = null;
let uiResourceDriver: UIResourceDriver | null = null;
let port: number | null;

const createWindow = (port: number, apiPort: number) => {

  const windowUrl = `http://localhost:${port}/?apiBaseUrl=http://localhost:${apiPort}/api`;
  // const windowUrl = `./ui/index.html/?apiBaseUrl=http://localhost:${port}`;

  console.log(`Lunching electron window for ${windowUrl}`);

  const mainAppWindow = new AppWindow({
    content: { url: windowUrl }
  });

  mainWindow = mainAppWindow.getWindow();

}

const appIsReady = async () => {

  httpInterface = new HttpInterface(
    parseInt(process.env.APP_PORT || '0')
  );

  uiResourceDriver = new UIResourceDriver(uiDirName);
  uiResourceDriver.configure(httpInterface);

  ServiceCollection.addEndpoints(httpInterface);

  const prt = await httpInterface.listen();
  port = prt;

  const uiPort = !isNaN((process.env.APP_UIPORT) as any) && parseInt((process.env.APP_UIPORT) as any) !== 0
    ? parseInt((process.env.APP_UIPORT) as any)
    : prt;

  createWindow(uiPort, prt);

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", appIsReady);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow(port || 3000, port || 3000);
  }
});

  // In this file you can include the rest of your app"s specific main process
  // code. You can also put them in separate files and require them here.