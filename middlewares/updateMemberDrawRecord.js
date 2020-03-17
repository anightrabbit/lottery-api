// 需求：记录会员抽奖结果

async function updateMemberDrawRecord (req, res, next) {
	try {
		next();
	}
	catch(e) {
		throw new Error(e);
	}
}

module.exports = updateMemberDrawRecord;