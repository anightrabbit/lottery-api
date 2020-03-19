// 需求：活动是否在有效期
const moment = require('moment');
const activityModel = require('../models/prizeActivity.model');

async function checkActivityDate(req, res, next) {
	try {
		const body = req.body;
		if (!body.activity) {
			return res.send({
				msg: '活动不存在',
				err: true,
			});
		} else {
			const activityInfo = await getActivity(body.activity);
			if (!activityInfo) {
				return res.send({
					msg: '活动尚未开始或已经结束',
					err: true,
				});
			}
			req.activityInfo = activityInfo;
		}
		next();
	} catch (e) {
		throw new Error(e);
	}
}

const getActivity = async (activity) => {
	const today = moment(new Date()).format('YYYY-MM-DD');
	const query = {
		activity,
		startDate: {
			$lt: today
		},
		endDate: {
			$gt: today
		}
	};
	return activityModel.findOne(query);
}

module.exports = checkActivityDate;