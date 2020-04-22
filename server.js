// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
var todos =  ['Đi chợ','Nấu Cơm','Học Tại Codersx']
// https://expressjs.com/en/starter/basic-routing.html
app.get('/',function(req,res){
  res.render('index',{
    todos : todos
  });
});

app.get('/todos',function(req,res){
  var q = req.query.q;
  var matchedTodos = todos.filter(function(todo){
    return todo.toLowerCase().indexOf(q.toLowerCase()) !== -1
  });
  res.render('index',{
    todos : matchedTodos
  });
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
