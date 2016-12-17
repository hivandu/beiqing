/**
 * Created by Hivan Du on 2016/12/4.
 */
var util = require('util');
function SecurityUser(userVO) {
  var me = this;
  Object.keys(userVO).forEach(function(item, index, vo){
    me[item] = userVO[item];
  });
}
module.exports = SecurityUser;