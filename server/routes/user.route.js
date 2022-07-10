const UserController = require('../controller/user.controller')

module.exports = function(app) {
    app.post('/api/user', UserController.createUser)
    app.get('/api/user/allUsers', UserController.showAllUsers)
    app.get('/api/user/:id', UserController.userDetails)
    app.put('/api/user/:id', UserController.updateUser)
    app.delete('/api/user/:id', UserController.deleteUser)
}