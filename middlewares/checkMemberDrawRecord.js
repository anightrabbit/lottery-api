// 需求：每个会员每天抽奖次数不能超过限制

async function checkMemberDrawRecord (req, res, next) {
	try {
		next();
	}
	catch(e) {
		throw new Error(e);
	}
}

module.exports = checkMemberDrawRecord;