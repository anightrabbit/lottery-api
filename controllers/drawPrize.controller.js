const prizePoolModel = require('../models/prizePool.model');
const prizeActivityModel = require('../models/prizeActivity.model');

// res错误
const handleError = (error, res) =>
  res.send({
    code: 500,
    hasError: true,
    error,
  });
// res成功
const handleSuccess = (params, res) => {
  const result = {
    code: 200,
    ...params,
  };
  res.send(result);
};
const createHandleActivity = async (req, res) => {
  const body = req.body;
  // 批量插入
  const record = await prizeActivityModel.insertMany(body);
  return !record ?
    handleError(record, res) :
    handleSuccess({
        msg: '添加成功',
        // data: record,
      },
      res,
      req,
    );
};
const createHandlePool = async (req, res) => {
  const body = req.body;
  // 批量插入
  const record = await prizePoolModel.insertMany(body);
  return !record ?
    handleError(record, res) :
    handleSuccess({
        msg: '添加成功',
        // data: record,
      },
      res,
      req,
    );
};

const createAndUpdateForPrizePool = async (req, res) => {
  try {
    createHandlePool(req, res);
  } catch (e) {
    handleError(e, res);
  }
};

const createAndUpdateForActivity = async (req, res) => {
  try {
    createHandleActivity(req, res);
  } catch (e) {
    handleError(e, res);
  }
};

module.exports = {
  createAndUpdateForPrizePool,
  createAndUpdateForActivity
};