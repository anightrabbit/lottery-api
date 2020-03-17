const Router = require('express');
const drawPrizeRoute = require('./drawPrize.route');

const routes = new Router();

routes.use('/activity', drawPrizeRoute);

module.exports = routes;
