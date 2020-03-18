// 需求：已中奖的需要实时更新为已领取状态
// 实现：从奖池里捞取所有checkStatus是false的奖品

const prizePoolModel = require('../models/prizePool.model');

async function checkRestPrizePool(req, res, next) {
	try {
		const restPrizePool = await prizePoolModel.find({
			checkStatus: false
		});
		console.log('restPrizePool', restPrizePool.length);
		if (restPrizePool && restPrizePool.length) {
			req.restPrizePool = restPrizePool;
			req.restPrizeNoList = restPrizePool.map(item => item.prizeNo);
		} else {
			return res.send({
				msg: '奖池已空，😢',
			});
		}
		next();
	} catch (e) {
		throw new Error(e);
	}
}

module.exports = checkRestPrizePool;