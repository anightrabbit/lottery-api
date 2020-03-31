// 需求：抽奖要随机性，公平
// 实现：用随机数生成的一个pool范围内的number，对应奖池的prizeNo
// https://mathjs.org/docs/reference/functions/pickRandom.html

const math = require('mathjs');

const pickRandom = (prizeTokenArray) => prizeTokenArray.length ?
	math.pickRandom(prizeTokenArray) : -1;

async function drawPrize(req, res, next) {
	try {
		const restPrizeNoList = req.restPrizeNoList;
		if (restPrizeNoList.length) {
			const prizeToken = pickRandom(req.restPrizeNoList);
			const prizeInfo = req.restPrizePool.find(item => item.prizeNo === prizeToken);
			req.prizeInfo = prizeInfo;
		} else {
			// 奖池已空
			 req.prizeInfo = {
			 	prizeNo: -1,
			 	prizeType: 'lucky'
			 }
		}
		next();
	} catch (e) {
		throw new Error(e);
	}
}

module.exports = drawPrize;