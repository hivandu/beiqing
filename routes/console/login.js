/**
 * Created by Hivan Du on 2016/12/4 21:30.
 */
var express = require('express');
var router = express.Router();
var service = null;
var RenderData = require('../../utils/render-data');
var SecurityUser = require('../../model/security-user');

router.post('/', function (req, res, next) {
  var renderData = new RenderData();
  if(req.body.username == 'admin' && req.body.pwd == 'admin'){
    req.session.securityUser = new SecurityUser({
      username: req.body.username
    });
  }else{
    renderData.status = RenderData.Fail;
  }
  res.json(renderData)
});

module.exports = router;
