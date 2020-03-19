// 需求：参与抽奖会员能查看自己的抽奖记录

const prizeRecordModel = require('../models/prizeRecord.model');

async function checkMemberDrawRecord(req, res, next) {
	try {
		const {
			memberId
		} = req.body;
		req.drawRecords = await prizeRecordModel.find({
			memberId
		});
		next();
	} catch (e) {
		throw new Error(e);
	}
}

module.exports = checkMemberDrawRecord;