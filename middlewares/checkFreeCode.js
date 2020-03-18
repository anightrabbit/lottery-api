// 需求：带有推广渠道code，免费抽奖一次

async function checkFreeCode(req, res, next) {
	try {
		const {
			code
		} = req.body;
		req.isFreeCode = req.activityInfo.freeCode && req.activityInfo.freeCode.includes(code);
		next();
	} catch (e) {
		throw new Error(e);
	}
}

module.exports = checkFreeCode;