// 需求：登陆会员才有抽奖机会

async function checkMemberAuth (req, res, next) {
	try {
		next();
	}
	catch(e) {
		throw new Error(e);
	}
}

module.exports = checkMemberAuth;