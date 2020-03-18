# h5营销抽奖活动API

## 功能实现

### config目录，API配置信息
+ prizeData.js文件配置奖池信息，各种需求限制自由配置，开启中间件，自由搭配。

### models目录，MonogoDB数据模型
+ prizeActivity.model.js记录抽奖活动信息
+ prizeContact.model.js记录大奖用户领取联系信息
+ prizePool.model.js记录奖池信息
+ prizeRecord.model.js记录抽奖记录

### middlewares目录，中间件
+ checkMemberAuth.js检查用户抽奖权限，非登陆会员不可参与抽奖
+ checkFreeCode.js 检查渠道免费抽奖码
+ checkMemberDrawRecord.js检查会员抽奖记录，限制抽奖次数
+ checkMemberRestPoint.js检查会员剩余积分是否足够参与一次抽奖
+ drawPrize.js 生成随机数对应奖池的奖品编号，确定是否中奖
+ updateMemberDrawRecord.js 更新会员抽奖记录


### 抽奖请求示例

请求参数：
| 参数 | 类型 |可选| 备注 |
| -------- | -------- | -------- |-------- |
| memberId|number|否|会员Id|
| activity|string|否|活动名称|
| code|string|是|渠道|

    {
        "memberId": 15,
        "activity":"fuck3yue",
        "code":"hello"
    }

返回参数：

    {
        "data": {
            "prizeLevel": 8,
            "checkStatus": false,
            "_id": "5e71caf9a1b3fc3522f23ad0",
            "prizeType": "point",
            "prizeText": "奖励300积分",
            "prizeNo": 3613,
            "__v": 0,
            "created_at": "2020-03-18T07:17:13.827Z",
            "updated_at": "2020-03-18T07:17:13.827Z"
        },
        "msg": "🎉🎉🎉,中奖了呢"
    }
