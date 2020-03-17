const Model = require('../models/prizePool.model');
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
const createHandle = async (req, res) => {
  const body = req.body;
  // 批量插入
  const record = await Model.insertMany(body);
  return !record
    ? handleError(record, res)
    : handleSuccess(
        {
          msg: '添加成功',
          // data: record,
        },
        res,
        req,
      );
};
// 批量插奖品数据进奖池
const createAndUpdate = async (req, res) => {
  try {
    createHandle(req, res);
  } catch (e) {
    handleError(e, res);
  }
};

module.exports = {
  createAndUpdate,
};