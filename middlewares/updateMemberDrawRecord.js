// 需求：记录会员抽奖结果

const prizeRecordModel = require('../models/prizeRecord.model');
const prizePoolModel = require('../models/prizePool.model');


async function updateMemberDrawRecord(req, res, next) {
	try {
		const { prizeNo, prizeType } = req.prizeInfo;
		const body = req.body;
		// 奖池信息更新
		updatePrizePool(prizeNo, {
			checkStatus: true
		});
		// 保存会员抽奖记录
		createPrizeRecord({memberId: body.memberId, prizeNo, prizeType});
		return res.send({
			data: req.prizeInfo,
			msg:'🎉🎉🎉,中奖了呢',
			todayDrawRest:req.todayDrawRest - 1, // 今日剩余抽奖次数
		});
		next();
	} catch (e) {
		throw new Error(e);
	}
}


const updatePrizePool = async (prizeNo, updateOptions) => {
	const result = await prizePoolModel.updateOne({
		prizeNo
	}, updateOptions);
	console.log(result.n, result.nModified);
}

const createPrizeRecord = async (data) => {
	const result = await prizeRecordModel.create(data);
	console.log(result);
}

module.exports = updateMemberDrawRecord;