const Router = require('express');
const Controller = require('../controllers/drawPrize.controller');

const routes = new Router();

routes
  .route('/')
  .post(Controller.updatePrizePool);

routes
  .route('/drawPrize')
  .post(Controller.updatePrizePool);

module.exports = routes;
