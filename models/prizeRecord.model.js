const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrizeRecordSchema = new Schema(
  {
    memberId: {
      type: Number,
      required: [true, 'memberId is required!'],
    },
    freeCode: {
    	type: String,// 参与抽奖的免费code
    },
    prizeNo: {
    	type: Number,
    	required: [true, 'prizeNo is required'],
    	default: 0, // 奖池奖品被领取完，默认分配参与奖
    },
    prizeType: {
      type: String, // 奖品类型，标记中奖后的领取方式，若lucky则未中奖
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

module.exports = mongoose.model('prizeRecord', PrizeRecordSchema);