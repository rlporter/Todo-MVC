const express = require('express');
const app = express();

let todo = [];

//GET /api/todos/ - return a JSON array of todo items
app.get('/', function(req, res){
  res.json([]);
});

//POST /api/todos/ - post a JSON representation of a todo and have it saved. Returns the saved todo item in JSON.
app.post('/todo', function(req,res){
  res.json(todo);
});

//GET /api/todos[/id] - get a specific todo item.
app.get('/todo/:id', function(req, res){
  res.json(req.params.todo.id);
});

//PUT /api/todos[/id] - update a todo item. Returns the modified todo item.
app.put('/todo/:id', function(req, res){
  res.json(req.params.todo.id);
});

//PATCH /api/todos[/id] - partially update a todo item. Returns the modified todo item.
app.patch('/todo/:id', function(req, res){
  res.json(req.params.todo.id);
});

//DELETE /api/todos[/id] - deletes a todo item. Returns the todo item that was deleted.
app.delete('todo/:id', function(req, res){
  res.json(req.params.todo.id);
});

app.listen(3000, function () {
  console.log('Successfully started node application!')
});
