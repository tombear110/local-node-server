

var express = require('express');
var http = require('http');
var path = require('path');
var history = require('connect-history-api-fallback');

var app = express();
app.set('port', 2001);

app.use(history());         // !! 放在static静态资源的上面

// express 托管静态文件 ./public 文件夹下
app.use(express.static(path.join(__dirname, 'dist')));

http.createServer(app).listen(app.get('port'), function () {
  
    console.log(`http://localhost:${app.get('port')}`)
});
