
const { request } = require('http');
const User = require('../model/user.model');

module.exports.createUser = (request, response) => {
    const {firstName, lastName, email} = request.body;
    User.create({
        firstName,
        lastName,
        email
    })
    .then(user => response.json(user))
    .catch(err => response.status(400).send(err))
}

module.exports.showAllUsers = (request, response) => {
    User.find({})
    .then(res => response.json(res))
    .catch(err => response.status(400).send(err))
}

module.exports.userDetails = (req, res) => {
    User.findOne({_id: req.params.id})
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
}

module.exports.updateUser = (req,res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(user => res.json(user))
    .catch(err => res.json(err))
}

module.exports.deleteUser = (req,res) => {
    User.deleteOne({_id: req.params.id})
    .then(deletedUser =>  res.json(deletedUser))
    .catch(err => res.josn(err))
}