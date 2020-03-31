// 需求：大数组中剔除一个小数组
// 返回一个
// prizeLimit['$and'] = [ { prizeNo: { $le: 1,$gt:6 } }];


const formatPrizeSetting = (prizeSetting) => prizeSetting.filter(item => item.limit);

const countPrizeTotal = (prizeSetting) => prizeSetting.reduce((act,cur) => [...act,cur.total],[]) ;

const filterLimitPrize = (drawRecord,prizeSetting) => {
	const prizeSettingLimit = formatPrizeSetting(prizeSetting);
	const countPrize = countPrizeTotal(prizeSetting);
	const queryLimit = [];
	drawRecord.forEach(item => {
		if(prizeSettingLimit.includes(item.prizeLevel)) {
			queryLimit.push({
				prizeNo:{
					$lte:countPrize[item.level - 1],
					$gt:countPrize[item.level > 1 ? item.level -2 : level - 1]
				}
			});
		}
	});
	return queryLimit;
}

module.exports = {
	filterLimitPrize
}