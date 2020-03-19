// 需求：参与抽奖会员能查看自己的中奖记录
// 实现：从抽奖记录中过滤中奖记录

async function checkMemberLuckyRecord(req, res, next) {
	try {
		const records = req.drawRecords;
		console.log('records', records);
		const luckyRecords = records.filter(item => item.prizeType !== 'lucky' || item.prizeType === undefined);
		return res.send({
			data: luckyRecords,
			msg: '中奖纪录',
		});
		// next();
	} catch (e) {
		throw new Error(e);
	}
}

module.exports = checkMemberLuckyRecord;