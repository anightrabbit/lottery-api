// 需求：抽奖要随机性，公平
// 实现：用随机数生成的一个pool范围内的number，对应奖池的prizeNo
// https://mathjs.org/docs/reference/functions/pickRandom.html

const math =  require('mathjs');

const prizePoolModel = require('../models/prizePool.model');

const pickRandom = (prizeTokenArray) => prizeTokenArray.length ?
	math.pickRandom(prizeTokenArray) : -1;

async function drawPrize (req, res, next) {
	try {
		const prizeToken = pickRandom(res.restPrizePool);
		res.send({
			prizeToken
		});
		next();
	}
	catch(e) {
		throw new Error(e);
	}
}

module.exports = drawPrize;