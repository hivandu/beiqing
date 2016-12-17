/**
 * Created by 13219 on 2016/12/5.
 */
var util =require('util');
function Pager4DataTable(options) {
  this.draw = 1;
  this.recordsTotal = 0;
  this.recordsFiltered = 0;
  this.data = [];
  var me = this;
  if(util.isObject(options)){
    Object.keys(options).forEach(function(item, index, vo){
      me[item] = options[item];
    });
  }
};

Pager4DataTable.prototype.parsePagerData = function (result) {
  this.data = result.data;
};
module.exports = Pager4DataTable;