// 需求：带有推广渠道code，免费抽奖一次

async function checkFreeCode (req, res, next) {
	try {
		next();
	}
	catch(e) {
		throw new Error(e);
	}
}

module.exports = checkFreeCode;