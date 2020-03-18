const Router = require('express');
const Controller = require('../controllers/drawPrize.controller');
const checkMemberAuth = require('../middlewares/checkMemberAuth');
const checkFreeCode = require('../middlewares/checkFreeCode');
const checkRestPrizePool = require('../middlewares/checkRestPrizePool');
const checkMemberRestPoint = require('../middlewares/checkMemberRestPoint');
const drawPrize = require('../middlewares/drawPrize');
const updateMemberDrawRecord = require('../middlewares/updateMemberDrawRecord');
const checkActivityDate = require('../middlewares/checkActivityDate');
const checkMemberDrawRecord = require('../middlewares/checkMemberDrawRecord');
const routes = new Router();

routes
	.route('/luckyDraw')
	.get((req,res,next) => res.send('good luck'))
	.post(
		checkMemberAuth,// 先检查参与抽奖用户权限
		checkActivityDate, // 检查抽奖活动有效期
		checkFreeCode, // 检查参与用户渠道来源，是否需要消耗积分参与
		checkMemberDrawRecord, //检查用户抽奖记录，是否符合活动限制
		checkMemberRestPoint, // 检查用户积分是否足够，如足够，先扣积分，再参与
		checkRestPrizePool, // 检查奖池是否有剩余奖品，无奖品，则返回谢谢参与
		drawPrize, // 抽奖，产生一个随机数号码，对应奖池奖品编号，若有则中奖，若无，则表示未中奖
		updateMemberDrawRecord); // 最后更新抽奖记录

routes
	.route('/updatePrizePool')
	.post(Controller.createAndUpdateForPrizePool);

routes
	.route('/updateActivity')
	.post(Controller.createAndUpdateForActivity);

module.exports = routes;