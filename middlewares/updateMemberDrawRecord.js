// 需求：记录会员抽奖结果

const {
	updatePrizePool,
	createPrizeRecord
} = require('../controllers/drawPrize.controller');

async function updateMemberDrawRecord(req, res, next) {
	try {
		const {
			prizeNo,
			prizeType
		} = req.prizeInfo;
		const body = req.body;
		// 奖池信息更新
		updatePrizePool(prizeNo, {
			checkStatus: true
		});
		// 保存会员抽奖记录
		createPrizeRecord({
			memberId: body.memberId,
			prizeNo,
			prizeType
		});
		res.send({
			data: req.prizeInfo,
			msg: prizeNo > -1 ? '恭喜中奖' : '谢谢参与',
			todayDrawRest: req.todayDrawRest - 1, // 今日剩余抽奖次数
		});
		next();
	} catch (e) {
		throw new Error(e);
	}
}

module.exports = updateMemberDrawRecord;