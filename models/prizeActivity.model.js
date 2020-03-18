const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrizeActivitySchema = new Schema(
  {
    activity: {
      type: String,
      required: [true, 'activity is required!'],
    },
    startDate: {
    	type: Date,// 参与抽奖的免费code
    	required: [true, 'startDate is required!'],
    },
    endDate: {
    	type: Date,
    	required: [true, 'endDate is required!'],
    },
    drawLimitTotal: {
      type: Number, // 每个用户限制参与抽奖总次数
    },
    drawLimitDay: { // 每个用户限制参与抽奖次数每天
      type: Number,
    },
    drawLimitTime: {
      type: Number, // 每间隔多长时间允许抽奖一次，单位/分钟
    },
    drawLimitPoint: {
      type: Number, // 抽奖一次消耗多少积分
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

module.exports = mongoose.model('prizeActivitie', PrizeActivitySchema);