import { app, BrowserWindow } from "electron";
import * as path from "path";


export interface WindowProps {

    width?: number;
    height?: number;

    content: { url: string } | { path: string };

}

const isUrlContent = (obj: any): obj is { url: string } => {
    return (typeof obj.url !== 'undefined');
}

const isFileContent = (obj: any): obj is { path: string } => {
    return (typeof obj.path !== 'undefined');
}

export class AppWindow {

    private win: Electron.BrowserWindow | null;

    constructor(props: WindowProps) {
        props = props || {};

        // Create the browser window.
        this.win = new BrowserWindow({
            width: props.width || 1200,
            height: props.height || 600,
            // webPreferences: {
            //     preload: path.join(__dirname, "preload.js"),
            // },
        });

        // and load the index.html of the app.
        //mainWindow.loadFile(path.join(__dirname, "../index.html"));
        const contentObj = props.content;
        if (isUrlContent(contentObj)) {
            this.win.loadURL(contentObj.url);
        } else if (isFileContent(contentObj)) {
            this.win.loadFile(contentObj.path);
        }

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