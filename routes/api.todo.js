const express = require('express');
const router = express.Router();
const {create, getTodos, getTodoById, updateTodoById, deleteById} = require('../controlers/todo.controlers');

router.post('/todos', create);

router.get('/todos', getTodos);

router.get('/todos/:idTodo', getTodoById);

router.put('/todos/:idTodo', updateTodoById);

router.delete('/todos/:idTodo', deleteById);

module.exports = router;