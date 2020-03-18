const axios = require('axios');
const _ = require('lodash');
const DATA = require('./prizeData');

const dbURL1 = 'http://localhost:3000/api/activity/updatePrizePool';
const dbURL2 = 'http://localhost:3000/api/activity/updateActivity';


const update = (URL, data) => axios.post(URL, data).then(res => {
	console.log('新增的' + data.length + '条数据更新完成。。。');
}).catch(err => {
	console.log(err);
});

// 生成抽奖活动数据
const generateActivity = (activityName) => {
	const activityModelData = [];
	DATA[activityName].forEach(activitySetting => {
		activityModelData.push({
			...activitySetting,
			activity: activityName
		});
	});
	return activityModelData;
};

// 生成奖池数据
const generatePrizePool = (poolConfig, activity) => {
	let num = 0;
	const pool = poolConfig[activity];
	const prizes = [];
	pool.map(activityItem => {
		activityItem.prizeSetting.map((prizeSettingItem, prizeSettingIndex) => {
			for (let i = 0; i < prizeSettingItem.total; i++) {
				num++;
				prizes.push({
					prizeLevel: prizeSettingItem.level,
					prizeType: prizeSettingItem.type,
					prizeText: prizeSettingItem.text,
					prizeNo: num,
				});
			}
		});
	});
	return prizes;
}

const allPrize = generatePrizePool(DATA, 'fuck3yue');
const allActivityData = generateActivity('fuck3yue');

const chunkData = (url, data) => {
	// 切割数组
	const chunkArray = _.chunk(data, 100);
	console.log('chunkArray-->', chunkArray.length);
	// 批量插入数据
	_.forEach(chunkArray, (item, index) => {
		setTimeout(() => {
			axios.post(url, item).then(()=> {
				if (index === chunkArray.length - 1) {
					console.log('全部更新完成');
				}
			});
		}, 1000);
	});
};

update(dbURL2, allActivityData);
// chunkData(dbURL1, allPrize);
