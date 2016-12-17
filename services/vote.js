/**
 * Created by Hivan Du on 2016/11/26.
 */
var debug = require('debug')('vote:server');
var DBClient = require('./base/DB').init();
var vote = {
    list: function (id, callback) {
        var sqlstr = [
            'SELECT',
            't1.id AS optionId,',
            't2.id AS subVoteId,',
            't3.id AS voteId,',
            't4.id AS topId,',
            't1. NAME AS optionName,',
            't2.`subject` AS subVoteName,',
            't3.`subject` AS voteName,',
            't4.`subject` AS topName',
            'FROM',
            'sub_vote_options t1',
            'LEFT JOIN sub_vote t2 ON t2.id = t1.sub_vote_id',
            'LEFT JOIN vote t3 ON t3.id = t2.vote_id',
            'LEFT JOIN vote t4 ON t4.id = t3.parent_id',
            'WHERE',
            't4.id = ?',
            'ORDER BY t4.position,t3.position,t2.position,t1.position ASC'].join(' ');
        DBClient.query(sqlstr, [id], function (rows) {
            try {
                callback.call(this, rows);
            } catch (e) {
                debug(e);
            }
        });
    },
    listCount: function (id, callback) {
        var sqlstr = [
            'SELECT',
            't1.id AS optionId,',
            't2.id AS subVoteId,',
            't3.id AS voteId,',
            't4.id AS topId,',
            't1. NAME AS optionName,',
            't2.`subject` AS subVoteName,',
            't3.`subject` AS voteName,',
            't4.`subject` AS topName,',
            'COUNT(t5.vote_result) AS optionCount',
            'FROM',
            'sub_vote_options t1',
            'LEFT JOIN sub_vote t2 ON t2.id = t1.sub_vote_id',
            'LEFT JOIN vote t3 ON t3.id = t2.vote_id',
            'LEFT JOIN vote t4 ON t4.id = t3.parent_id',
            'LEFT JOIN vote_result t5 ON t5.vote_result = t1.id',
            'WHERE',
            't4.id = ?',
            'GROUP BY t5.vote_result',
            'ORDER BY t4.position,t3.position,t2.position,t1.position ASC'].join(' ');
        DBClient.query(sqlstr, [id], function (rows) {
            try {
                callback.call(this, rows);
            } catch (e) {
                debug(e);
            }
        });
    },
    saveResult: function (data, callback) {
        var preSqls = [];
        [].concat(data).forEach(function (_itr, _i, _ar) {
            preSqls.push([
                '(',
                'UUID(),',
                "'anonymous',",
                "'',",
                "'" + _itr + "',",
                'NOW(),',
                "'anonymous',",
                'NOW(),',
                "'anonymous'",
                ')'
            ].join(' '))
        });
        var sqlstr = [
                'INSERT INTO vote_result (',
                'id,',
                'voter_id,',
                'sub_vote_id,',
                'vote_result,',
                'create_date,',
                'create_user_id,',
                'last_update_date,',
                'last_update_user_id',
                ')',
                'VALUES'
            ].join(' ') + preSqls.join(',');
        DBClient.insert(sqlstr, null, function (rows) {
            try {
                callback.call(this, rows);
            } catch (e) {
                debug(e);
            }
        });
    },
    saveVoterInfo: function (data, callback) {
        var sqlstr = [
            "INSERT INTO `voter` (",
            "`id`,",
            "`name`,",
            "`mobile`,",
            "`vote_id`,",
            "`lottery_level`,",
            "`create_date`,",
            "`create_user_id`,",
            "`last_update_date`,",
            "`last_update_user_id`",
            ")",
            "VALUES",
            "(",
            "UUID(),",
            "'" + data.name + "',",
            "'" + data.mobile + "',",
            "'" + data.voteId + "',",
            "0,",
            "NOW(),",
            "'" + data.mobile + "',",
            "NOW(),",
            "'" + data.mobile + "'",
            ")"
        ].join(' ');
        DBClient.query(sqlstr, null, function (rows) {
            try {
                callback.call(this, rows);
            } catch (e) {
                debug(e);
            }
        });
    },
    checkVoter: function (data, callback) {
        var sqlstr = [
            "SELECT * FROM `voter` WHERE ",
            "mobile = '" + data.mobile + "'",
            "AND vote_id = '" + data.voteId + "'"
        ].join(' ');
        DBClient.query(sqlstr, null, function (rows) {
            try {
                callback.call(this, rows);
            } catch (e) {
                debug(e);
            }
        });
    },
    voterList: function (data, callback) {
        var sqlstr = [
            "SELECT",
            "`name`,",
            "mobile",
            "FROM",
            "voter",
            "WHERE vote_id = ?",
            "AND lottery_level > 0",
            "LIMIT ?,?"
        ].join(' ');
        DBClient.query(sqlstr, [data.voteId, parseInt(data.start || 0), parseInt(data.limit || 10)], function (rows) {
            try {
                callback.call(this, rows);
            } catch (e) {
                debug(e);
            }
        });
    },
    countVoter: function (data, callback) {
        var sqlstr = [
            "SELECT",
            "count(*) as voterNum",
            "FROM",
            "voter",
            "WHERE vote_id = ?",
            "AND lottery_level = 0"
        ].join(' ');
        DBClient.query(sqlstr, [data.voteId], function (rows) {
            try {
                callback.call(this, rows);
            } catch (e) {
                debug(e);
            }
        });
    },
    getVoterBySeed: function (data, callback) {
        var sqlstr = [
            "SELECT",
            "`id`,",
            "`name`,",
            "mobile",
            "FROM",
            "voter",
            "WHERE vote_id = ?",
            "AND lottery_level = 0",
            "LIMIT ?,1"
        ].join(' ');
        DBClient.query(sqlstr, [data.voteId, data.seed], function (rows) {
            try {
                callback.call(this, rows);
            } catch (e) {
                debug(e);
            }
        });
    },
    updateLottery: function (data, callback) {
        var sqlstr = [
            "update voter set lottery_level = ? where id= ?"
        ].join('');
        DBClient.query(sqlstr, [data.lotteryLevel, data.voterId], function (rows) {
            try {
                callback.call(this, rows);
            } catch (e) {
                debug(e);
            }
        });
    }
};
module.exports = vote;