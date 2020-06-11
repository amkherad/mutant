import { app, BrowserWindow } from "electron";
import * as path from "path";


export interface WindowProps {

    width?: number;
    height?: number;

    content: {url: string} | {path: string};

}


export class AppWindow {

    private win: Electron.BrowserWindow | null;

    constructor(props: WindowProps) {
        props = props || {};

        // Create the browser window.
        this.win = new BrowserWindow({
            width: props.width || 800,
            height: props.height || 600,
            webPreferences: {
                preload: path.join(__dirname, "preload.js"),
            },
        });

        // and load the index.html of the app.
        //mainWindow.loadFile(path.join(__dirname, "../index.html"));
        this.win.loadURL('http://localhost:3000/');

        // Open the DevTools.
        this.win.webContents.openDevTools();

        // Emitted when the window is closed.
        this.win.on("closed", () => {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            this.win = null;
        });
    }

    getWindow() {
        return this.win;
    }
}