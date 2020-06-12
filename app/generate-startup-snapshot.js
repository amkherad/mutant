const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')
const electronLink = require('electron-link')
const vm = require('vm')

const srcDirName = __dirname + '/dist';
const outputDirName = __dirname + '/dist';

const excludedModules = [];

const snapshotScript1 = electronLink({
    baseDirPath: srcDirName,
    mainPath: srcDirName + '/main.js',
    cachePath: outputDirName + '/cache',
    shouldExcludeModule: (modulePath) => excludedModules.includes(modulePath)
});

snapshotScript1.then(snapshotScript => {
    console.log(snapshotScript);

    const snapshotScriptPath = outputDirName + '/bundle.js'
    fs.writeFileSync(snapshotScriptPath, snapshotScript)

    // Verify if we will be able to use this in `mksnapshot`
    vm.runInNewContext(snapshotScript, undefined, { filename: snapshotScriptPath, displayErrors: true })
}).catch(error => {
    console.error(error);
});
