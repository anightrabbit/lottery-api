const Router = require('express');
const Controller = require('../controllers/drawPrize.controller');
const checkMemberAuth = require('../middlewares/checkMemberAuth');
const checkFreeCode = require('../middlewares/checkFreeCode');
const checkRestPrizePool = require('../middlewares/checkRestPrizePool');
const checkMemberRestPoint = require('../middlewares/checkMemberRestPoint');
const drawPrize = require('../middlewares/drawPrize');
const updateMemberDrawRecord = require('../middlewares/updateMemberDrawRecord');

const routes = new Router();

routes
	.route('/luckyDraw')
	.get((req,res,next) => res.send('good luck'))
	.post(
		checkMemberAuth,
		checkFreeCode,
		checkMemberRestPoint,
		checkRestPrizePool,
		drawPrize,
		updateMemberDrawRecord);

routes
	.route('/updatePrizePool')
	.post(Controller.createAndUpdateForPrizePool);

routes
	.route('/updateActivity')
	.post(Controller.createAndUpdateForActivity);

module.exports = routes;