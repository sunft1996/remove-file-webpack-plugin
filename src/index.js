/*
 * @Descripttion: 
 * @Author: sunft
 * @Date: 2020-05-26 11:16:34
 * @LastEditTime: 2020-05-26 17:01:11
 */
const Walker = require("walker");
const process = require("process");
const fs = require("fs");

module.exports = class removePlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        let { dirNames, fileNames, ignore } = this.options;
        const removeDirList = [];
        const removeFileList = [];
        compiler.hooks.entryOption.tap('removePlugin', (compilation) => {
            console.log('RemovePlugin is running...')
            ignore = Array.isArray(ignore) ? ignore : [];

            Walker(process.cwd())
                .filterDir(function (dir) {
                    if (ignore.indexOf(dir) !== -1 || /node_modules/.test(dir)) {
                        console.log(`Ignore ${dir}`);
                        return false
                    }
                    return true
                })
                .on('dir', function (dir) {
                    const thisDirName = dir.match(/[^\\]*$/g)[0];
                    if (Array.isArray(dirNames) && dirNames.indexOf(thisDirName) !== -1 && removeDirList.indexOf(dir) === -1) {
                        removeDirList.push(dir);

                    }
                })
                .on('file', function (file) {
                    const thisFileName = file.match(/[^\\]*$/g)[0];

                    if (Array.isArray(fileNames) && fileNames.indexOf(thisFileName) !== -1 && removeFileList.indexOf(file) === -1) {
                        removeFileList.push(file);
                    }
                })
                .on('end',function(){
                    removeDirList.forEach(item => {
                        fs.rmdirSync(item, { recursive: true });
                        console.log('\x1b[31m%s\x1b[0m', `Delete ${item}!`);
                    })
        
                    removeFileList.forEach(item => {
                        fs.unlinkSync(item);
                        console.log('\x1b[31m%s\x1b[0m', `Delete ${item}!`);
                    })
                });

        });
    }
}