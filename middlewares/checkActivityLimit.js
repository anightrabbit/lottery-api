// 需求：活动要求会员每天抽奖次数不能超过限制
// 新增：抽奖总次数的限制不告知用户，实际抽奖次数超过这个限制后，都是返回谢谢参与
// 同时，需要前台需要告知用户当天剩余抽奖次数

const moment = require('moment');

const {
	createPrizeRecord
} = require('../controllers/drawPrize.controller');

async function checkActivityLimit(req, res, next) {
	try {
		const {
			memberId
		} = req.body;
		const records = req.drawRecords;
		// 每天抽奖次数限制
		if (req.activityInfo.drawLimitDay) {
			const today = moment(new Date()).format('YYYYMMDD');
			const todays = records.filter(item => {
				const date = moment(item.created_at).format('YYYYMMDD');
				return date === today;
			});
			req.todayDrawRest = req.activityInfo.drawLimitDay - todays.length;
		}
		if (!req.todayDrawRest) {
			res.send({
				msg: '今日抽奖次数没有了，明天再来',
				data: null,
				todayDrawRest: 0
			});
		}
		if (records && records.length > req.activityInfo.drawLimitTotal) {	
			// 保存会员抽奖记录
			createPrizeRecord({
				memberId,
				prizeNo: -1,
				prizeType: 'lucky'
			});
			res.send({
				msg: '谢谢参与',
				data: {
					prizeNo: -1,
					prizeType: 'lucky'
				},
				todayDrawRest: req.todayDrawRest - 1,
			});
		}
		next();
	} catch (e) {
		throw new Error(e);
	}
}

module.exports = checkActivityLimit;