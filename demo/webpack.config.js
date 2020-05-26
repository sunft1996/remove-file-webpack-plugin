/*
 * @Descripttion: 
 * @Author: sunft
 * @Date: 2020-05-26 11:15:47
 * @LastEditTime: 2020-05-26 15:38:47
 */ 
const path = require("path");
const RemoveFileWebpackPlugin = require("../dist/index");
module.exports = {
    entry: {
        index: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new RemoveFileWebpackPlugin({
            dirNames:['dir_2'],
            fileNames:['file_1.js'],
        }),
    ],
   
}
