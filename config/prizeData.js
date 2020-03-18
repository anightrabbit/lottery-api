module.exports = {
	"fuck3yue": [{
		// drawLimitTime: 2, // 2分钟内只允许抽奖一次
		freeCode: ['hello','github'],
		total: 9421,
		drawLimitTotal: 10,// 参与抽奖总次数限制
		drawLimitDay: 3, // 每天参与抽奖次数限制
		drawLimitPoint: 100,// 参与抽奖每次需要消耗积分数量
		startDate: '2020-03-01',// 抽奖活动开始时间
		endDate: '2020-03-31',// 抽奖活动结束时间
		prizeSetting: [{
			level: 1,
			text: '免费全球游78天',
			type: 'form',
			total: 1,
		},{
			level: 2,
			text: '免费游轮5天4晚',
			type: 'form',
			total: 5,
		},{
			level: 3,
			text: '免费住酒店3晚',
			type: 'form',
			total: 15,
		},{
			level: 4,
			text: '奖励5000积分',
			type: 'point',
			total: 400,
		},{
			level: 5,
			text: '优惠券满1000减500',
			type: 'coupon',
			total: 600,
		},{
			level: 6,
			text: '优惠券满1500减500',
			type: 'coupon',
			total: 600,
		},{
			level: 7,
			text: '优惠券满2000减500',
			type: 'coupon',
			total: 800,
		},{
			level: 8,
			text: '奖励300积分',
			type: 'point',
			total: 2000,
		},{
			level: 9,
			text: '奖励100积分',
			type: 'point',
			total: 2000,
		},{
			level: 10,
			text: '参与奖',
			type: 'lucky',
			total: 3000,
		}],
	}],
};