const todoRoute = require('express').Router();

const TodoController = require('../controller/TodoController');

todoRoute.get('/', TodoController.getTodos)
todoRoute.post('/add',TodoController.addTodos)
todoRoute.get('/find/:id', TodoController.findById)
todoRoute.delete('/delete/:id', TodoController.deleteTodo)
todoRoute.put('/update/:id', TodoController.updateTodo)

module.exports = todoRoute;