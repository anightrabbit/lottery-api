const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrizePoolSchema = new Schema(
  {
    prizeLevel: {
    	type: Number,
    	default: 0, // 参与奖
    	required: [true, 'prizeLevel is required!'],
    },
    prizeType: {
    	type: String,
      enum: ['form', 'coupon', 'point'], 
      required: [true, 'prizeType is required!'],
      // 奖品领取方式：表单填写联系方式，发放优惠券券码，发放积分
    },
    prizeText: {
    	type: String, // 奖品描述
    	trim: true,
    	required: [true, 'prizeText is required!'],
    },
    prizeNo: {
    	type: Number,
    	unique: true,
    	required: [true, 'prizeNo is required!'],
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

module.exports = mongoose.model('prizePool', PrizePoolSchema);