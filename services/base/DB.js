/**
 * Created by Hivan Du on 2016/11/26.
 */
var mysql = require('mysql');
var debug = require('debug')('vote:server');
var conf = require('../../config/conf.db')
var Result = require('./result')
var pool = null;
var DB = {
  init: function () {
    if(!pool){
      pool= mysql.createPool(conf.mysql);
    }
  },
  query: function (sql, params, callback) {
    pool.getConnection(function (err, conn) {
      if (err) {
        debug(JSON.stringify(err))
        return;
      }
      conn.query(sql, params, function (err, rows) {
        if (err) {
          debug('exec sql error: ' + sql);
          debug('exec sql Params: ' + (params||"").toString());
          callback.call(this, new Result(Result.Fail, rows));
        } else {
          callback.call(this, new Result(Result.Success, rows));
        }
        conn.release();
      });
    })
  },
  shutdown: function () {
    if(pool){
      pool.end();
    }
  }
}
var mysqlClient = module.exports;
mysqlClient.init = function init(){
    if(!!pool){
      return mysqlClient;
    }else{
      DB.init();
      mysqlClient.insert = DB.query;
      mysqlClient.update = DB.query;
      mysqlClient.query = DB.query;
      return mysqlClient;
    }
};
mysqlClient.shutdown = function  shutdown() {
  DB.shutdown();
}
