'use strict';
module.exports = function(app) {
  var userOps = require('../controllers/usersController');

  // todoList Routes
  app.route('/users')
    .get(userOps.list_all_users)
    .post(userOps.create_a_user);


  app.route('/user/:userId')
    .get(userOps.read_a_user)
    .put(userOps.update_a_user)
    .delete(userOps.delete_a_user);
};