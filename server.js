// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
var express = require('express');
var app = express();
var port = 3000;
app.get('/',function (request,response) { // function call back nhận vào 2 tham số request : những thứ mà người dùng gửi response người dùng trả về
    response.send('<ul>' +
        '<li>Đi chợ</li>' +
        '<li>Nấu cơm</li>' +
        '<li>Rửa bát</li>' +
        '<li>Học code tại CodersX</li>' +
        '</ul>');
});
app.listen(port,function () {
    console.log('Sever listening on port'+port);
});