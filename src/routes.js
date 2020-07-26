const routes = require('express').Router();
const userController = require('./app/controllers/usercontroller');
const validatorMid = require('./app/middlewares/validators');
const jwtMid = require('./app/middlewares/jwt');

routes.post('/users', validatorMid.userCreateValidator, userController.store);
routes.post('/login', userController.auth);

routes.use(jwtMid);
routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.delete('/users/:id', userController.destroy);
routes.put(
  '/users/:id',
  validatorMid.userUpdateValidator,
  userController.update
);

module.exports = routes;
