const todoRoute = require('express').Router();

const TodoController = require('../controller/TodoController');

todoRoute.get('/', TodoController.getTodos);
todoRoute.get('/add',TodoController.addTodos);

module.exports = todoRoute;