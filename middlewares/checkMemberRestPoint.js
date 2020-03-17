// 需求：登陆会员消耗一定的积分参与一次抽奖

async function checkMemberRestPoint (req, res, next) {
	try {
		next();
	}
	catch(e) {
		throw new Error(e);
	}
}

module.exports = checkMemberRestPoint;
