// 需求：抽奖要随机性，公平
// 实现：用随机数生成的一个pool范围内的number，对应奖池的prizeNo
const math =  require('mathjs');

const pickRandom = (restPrizePool) => {
	const drawnToken = restPrizePool.length ?
		math.pickRandom(restPrizePool) : -1;
	return drawnToken;
}

async function drawPrize (req, res, next) {
	try {
		next();
	}
	catch(e) {
		throw new Error(e);
	}
}

module.exports = drawPrize;