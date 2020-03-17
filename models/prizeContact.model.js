const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrizeContactSchema = new Schema(
  {
    memberId: {
    	type: Number,
    	required: [true, 'memberId is required!'],
    	unique: true,
    },
    prizeNo: {
    	type: Number,
    	required: [true, 'prizeNo is required!'],
    	unique: true,
    },
    name: {
    	type: String,
    	required: [true, 'contact name is required!'],
    	trim: false,
    },
    phone: {
    	type: String,
    	required: [true, 'contact phone is required!'],
    	trim: true,
    	unique: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

module.exports = mongoose.model('prizeContact', PrizeContactSchema);