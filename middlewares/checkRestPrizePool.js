// 需求：大奖中奖次数限制
// 实现：从奖池里捞取所有checkStatus是false的奖品

const prizePoolModel = require('../models/prizePool.model');
const {filterLimitPrize} = require('../utils/');

async function checkRestPrizePool(req, res, next) {
	try {
		let prizeLimit = {
			checkStatus: false,
		}
		console.log(req.drawRecords.length,req.activityInfo.prizeSettingLimit);
		if (req.drawRecords.length) {
			const limits = filterLimitPrize(req.drawRecords,req.activityInfo.prizeSettingLimit);
			if (limits.length) prizeLimit['$and'] =  limits;
		}
		const restPrizePool = await prizePoolModel.find(prizeLimit);
		console.log('restPrizePool', restPrizePool.length);
		if (restPrizePool && restPrizePool.length) {
			req.restPrizePool = restPrizePool;
			req.restPrizeNoList = restPrizePool.map(item => item.prizeNo);
		} else {
			res.send({
				msg: '奖池已空，😢',
			});
		}
		next();
	} catch (e) {
		throw new Error(e);
	}
}

module.exports = checkRestPrizePool;