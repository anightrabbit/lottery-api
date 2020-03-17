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
	.post(checkMemberAuth,
		checkFreeCode,
		checkMemberRestPoint,
		checkRestPrizePool,
		drawPrize,
		updateMemberDrawRecord);

routes
	.route('/updatePrizePool')
	.post(Controller.createAndUpdate);

module.exports = routes;