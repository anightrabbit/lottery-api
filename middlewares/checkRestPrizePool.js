// 需求：已中奖的需要实时更新为已领取状态

async function checkRestPrizePool (req, res, next) {
	try {
		next();
	}
	catch(e) {
		throw new Error(e);
	}
}

module.exports = checkRestPrizePool;