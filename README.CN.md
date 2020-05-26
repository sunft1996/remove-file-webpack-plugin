<h1 align="center">sprite-smith-loader</h1>


![image](https://img.shields.io/badge/license-MIT-green)
![image](https://img.shields.io/badge/webpack-%5E4.0.0-blue)
## 介绍
webpack插件，用于删除项目下指定的文件和目录。


## 安装
下载sprite-smith-loader

```
npm install --save-dev remove-file-webpack-plugin
```
## 配置


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

属性名 | 类型 | 默认值 | 说明
---|---|---|---
dirNames | Array | [ ] | 删除的目录名
fileNames | Array | [ ] | 删除的文件名
ignore | Array | [ ] | 忽略目录的绝对路径

注：==node_modules== 默认会被忽略，不需添加到 ==ignore==


## Other
如果你有任何疑问，欢迎提交issue到 [GitHub](https://github.com/sunft1996/remove-file-webpack-plugin/).

## License

[MIT](https://github.com/sunft1996/remove-file-webpack-plugin/blob/master/LICENSE)
