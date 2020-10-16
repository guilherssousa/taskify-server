const express = require('express');

const GroupController = require('./controllers/Group.js');
const UserController = require('./controllers/User.js');

const routes = express.Router();

routes.get('/:groupId', GroupController.index)
routes.post('/group/new', GroupController.store)
routes.post('/group/update', GroupController.update)
routes.post('/', UserController.store)
routes.post('/index', UserController.index)

module.exports = routes;