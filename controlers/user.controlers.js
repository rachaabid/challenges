
const User = require('../models/user');


exports.createUser = async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      todos: req.body.todos
    });
    await User.create(user)
    res.send({ message: 'saved' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    });
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('todos');
    res.send(users);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    })
  }
}

exports.addId = async (req, res) => {
  try {
    const affect = await User.findByIdAndUpdate(req.params.idUser, { $push: { todos: req.params.idTodo } }, { new: true });
    res.send({ message: 'todo affected to user' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    })
  }
}

exports.pullId = async (req, res) => {
  try {
    const desaffect = await User.findByIdAndUpdate(req.params.idUser, { $pull: { todos: req.params.todoId } }, { new: true });
    res.send({ message: 'todo desaffected to user' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.idUser);
    res.send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    })
  }
}

exports.update = async (req, res) => {
  try {
    const userUpd = await User.findByIdAndUpdate(req.params.idUser);
    res.send({ message: 'user updated' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const supp = await User.findByIdAndRemove(req.params.idUser);
    res.send({ message: 'user deleted' });
  } catch (error) {
    res.status(500).send({
      message: error.message || 'some error occured while creating user'
    })
  }
}

