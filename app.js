var express = require('express')
var http = require('http')
var path = require('path')
var history = require('connect-history-api-fallback')
const fs = require('fs')

// // 处理txt文件
// const o = fs.readFileSync('./file/2020-10-26_13-17-9.txt', 'utf-8')
// //分解txt文件
// const arr = o.split('\r\n')
// const thData = arr[0]
// const tdData = arr.slice(1)

// const thJson = fs.writeFileSync('./file/th.json', JSON.stringify(thData))
// const tdJson = fs.writeFileSync('./file/td.json', JSON.stringify(tdData))

// 处理excel文件
const xlsx = require('node-xlsx').default
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`./file/湖南镇小学2020-08-10~08-18小时数据.xls`))
// console.log('workSheetsFromBuffer :>> ', workSheetsFromBuffer)

fs.writeFileSync('./file/excel.json', JSON.stringify(workSheetsFromBuffer))

// var app = express()
// app.set('port', 2001)

// app.use(history()) // !! 放在static静态资源的上面

// // express 托管静态文件 ./public 文件夹下
// app.use(express.static(path.join(__dirname, 'dist')))

// http.createServer(app).listen(app.get('port'), function () {
//   console.log(`http://localhost:${app.get('port')}`)
// })
