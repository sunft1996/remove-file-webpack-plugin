<!--
 * @Descripttion: 
 * @Author: sunft
 * @Date: 2020-05-26 17:39:48
 * @LastEditTime: 2020-05-26 17:50:25
--> 
<h1 align="center">sprite-smith-loader</h1>


![image](https://img.shields.io/badge/license-MIT-green) 
![image](https://img.shields.io/badge/webpack-%5E4.0.0-blue)

:rocket: [中文文档点这里](https://github.com/sunft1996/remove-file-webpack-plugin/blob/master/README.CN.md/)

## Introduce
A plugin for webpack removes files and folders before compiler.

## Getting Started
To begin, you'll need to install remove-file-webpack-plugin:

```
npm install --save-dev remove-file-webpack-plugin
```
Then add the plugin to your webpack config. 

For example:

**webpack.config.js**

```
const RemoveFileWebpackPlugin = require('remove-file-webpack-plugin'); 
module.exports = {
    plugins: [
        new RemoveFileWebpackPlugin({
            dirNames:['dir_1'],
            fileNames:['file_1.js'],
        })
    ],
};
```

**Options**

Name | Type	 | Default | Description
---|---|---|---
dirNames | {Array} | [ ] | Directory name to delete
fileNames | {Array} | [ ] | File name to delete
ignore | {Array} | [ ] | Absolute path to directory to ignore

P.S：**node_ Modules** will be ignored by default and do not need to be added to **ignore**

## Other
If you have any questions, please create an issue on [GitHub](https://github.com/sunft1996/remove-file-webpack-plugin/).

## License

[MIT](https://github.com/sunft1996/remove-file-webpack-plugin/blob/master/LICENSE)
