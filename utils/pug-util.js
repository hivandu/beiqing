/**
 * Created by Hivan Du on 2016/12/2.
 */
var util = require('util');
var debug = require('debug')('vote:server');
module.exports = {
  renderView: function renderView(res, view, renderData, callback){
    var cfg = {
      req: res.req
    };
    if(util.isObject(renderData)){
      for (var i in cfg){
        renderData[i] = cfg[i];
      }
    }else{
      renderData = cfg;
    }
    res.render(view, renderData , function (err, html) {
      var self = res;
      if (err) {
        debug(err);
        var error = new Error('express render exception');
        error.status = 500;
        return self.req.next(error);
      }
      self.send(html);
    });
  }
}
