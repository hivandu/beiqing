/**
 * Created by Hivan Du on 2016/12/8.
 */
var express = require('express');
var router = express.Router();
var voteService = require('../../services/vote');
var RenderData = require('../../utils/render-data');
var debug = require('debug')('vote:server');

/* GET vote home page API. */
router.get('/list', function (req, res, next) {
    var id = req.query.id;
    var renderData = new RenderData();
    try {
        voteService.list(id, function (result) {
            // pugUtil.renderView(res,'vote/index',{data:result.data});
            //res.json(records);
            var _data = result.data || [], _obj = {
                topVote: {
                    topId: null
                    , name: null
                    , secVote: [
                        {
                            secVoteId: null
                            , name: null
                            , subVote: [
                            {
                                subVoteId: null
                                , name: null
                                , options: [
                                {
                                    optionId: null
                                    , name: null
                                }
                            ]
                            }
                        ]
                        }
                    ]
                }
            };
            _obj = {};
            if (_data.length > 0) {
                _obj = {topVote: {}};
                var secMap = {}, subMap = {};
                _data.forEach(function (item, index, arr) {
                    if (!_obj.topVote.topId) {
                        _obj.topVote.topId = item.topId;
                        _obj.topVote.name = item.topName;
                        _obj.topVote.secVote = [];
                    }
                    var secVote = secMap[item.voteId + ""];
                    if (!secVote) {
                        secVote = secMap[item.voteId + ""] = {
                            secVoteId: item.voteId
                            , name: item.voteName
                            , subVote: []
                        };
                        _obj.topVote.secVote.push(secVote);
                    }
                    var subVote = subMap[item.subVoteId + ""];
                    if (!subVote) {
                        subVote = subMap[item.subVoteId + ""] = {
                            subVoteId: item.subVoteId
                            , name: item.subVoteName
                            , options: []
                        };
                        secVote.subVote.push(subVote);
                    }
                    subVote.options.push({
                        optionId: item.optionId
                        , name: item.optionName
                    })
                });
            } else {
                _obj = null;
            }
            renderData.result = _obj;
            res.json(renderData);
        });
    } catch (e) {
        debug(e);
        renderData.status = RenderData.Fail;
        res.json(renderData);
    }
});

router.get('/listCount', function (req, res, next) {
    var id = req.query.id;
    var renderData = new RenderData();
    try {
        voteService.listCount(id, function (result) {
            // pugUtil.renderView(res,'vote/index',{data:result.data});
            //res.json(records);
            var _data = result.data || [], _obj = {
                topVote: {
                    topId: null
                    , name: null
                    , secVote: [
                        {
                            secVoteId: null
                            , name: null
                            , subVote: [
                            {
                                subVoteId: null
                                , name: null
                                , options: [
                                {
                                    optionId: null
                                    , name: null
                                }
                            ]
                            }
                        ]
                        }
                    ]
                }
            };
            _obj = {};
            if (_data.length > 0) {
                _obj = {topVote: {}};
                var secMap = {}, subMap = {};
                _data.forEach(function (item, index, arr) {
                    if (!_obj.topVote.topId) {
                        _obj.topVote.topId = item.topId;
                        _obj.topVote.name = item.topName;
                        _obj.topVote.secVote = [];
                    }
                    var secVote = secMap[item.voteId + ""];
                    if (!secVote) {
                        secVote = secMap[item.voteId + ""] = {
                            secVoteId: item.voteId
                            , name: item.voteName
                            , subVote: []
                        };
                        _obj.topVote.secVote.push(secVote);
                    }
                    var subVote = subMap[item.subVoteId + ""];
                    if (!subVote) {
                        subVote = subMap[item.subVoteId + ""] = {
                            subVoteId: item.subVoteId
                            , name: item.subVoteName
                            , options: []
                        };
                        secVote.subVote.push(subVote);
                    }
                    subVote.options.push({
                        optionId: item.optionId
                        , name: item.optionName
                        , optionCount: item.optionCount
                    })
                });
            } else {
                _obj = null;
            }
            renderData.result = _obj;
            res.json(renderData);
        });
    } catch (e) {
        debug(e);
        renderData.status = RenderData.Fail;
        res.json(renderData);
    }
});

router.post('/saveResult', function (req, res, next) {
    var renderData = new RenderData();
    try {
        var result = JSON.parse(req.body.result);
        voteService.saveResult(result, function (result) {
            res.json(renderData);
        });
    } catch (e) {
        debug(e);
        renderData.status = RenderData.Fail;
        res.json(renderData);
    }
});


router.post('/saveVoterInfo', function (req, res, next) {
    var renderData = new RenderData();
    try {
        var result = JSON.parse(req.body.result);
        voteService.checkVoter(result, function (_result) {
            if (_result.data.length > 0) {
                renderData.status = RenderData.Fail;
                renderData.msg = '您已经参加过此活动了!!';
                res.json(renderData);
            } else {
                voteService.saveVoterInfo(result, function (result) {
                    res.json(renderData);
                });
            }
        })
    } catch (e) {
        debug(e);
        renderData.status = RenderData.Fail;
        res.json(renderData);
    }
});

router.get('/voterList', function (req, res, next) {
    var renderData = new RenderData();
    try {
        var result = JSON.parse(req.query.result);
        voteService.voterList(result, function (result) {
            renderData.result = result.data;
            res.json(renderData);
        });
    } catch (e) {
        debug(e);
        renderData.status = RenderData.Fail;
        res.json(renderData);
    }
});

router.post('/lottery', function (req, res, next) {
    var renderData = new RenderData();
    try {
        var result = JSON.parse(req.body.result);
        voteService.countVoter(result, function (_result) {
            var seed = Math.floor(Math.random() * parseInt(_result.data[0].voterNum));
            voteService.getVoterBySeed({seed: parseInt(seed), voteId: result.voteId}, function (__result) {
                renderData.result = __result.data;
                voteService.updateLottery({lotteryLevel:3, voterId:__result.data[0].id}, function (data) {
                    res.json(renderData);
                });
            });
        });
    } catch (e) {
        debug(e);
        renderData.status = RenderData.Fail;
        res.json(renderData);
    }
});


module.exports = router;