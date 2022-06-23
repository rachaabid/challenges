const express = require('express');
const router = express.Router();
const {createUser, getUsers, getUserById, update, deleteUser, addId, pullId} = require('../controlers/user.controlers');

router.post('/users', createUser);

router.get('/users', getUsers);

router.get('/users/:idUser', getUserById);

router.put('/users/:idUser', update);

router.delete('/users/:idUser', deleteUser);

router.put('/users/affect/:idUser/:idTodo', addId);

router.put('/users/desaffect/:idUser/:todoId', pullId);
module.exports = router;