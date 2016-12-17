/**
 * Created by Hivan Du on 2016/11/27.
 */
function Result(status,data,msg, errorCode) {
  this.status = status;
  this.data = data;
  this.msg = msg||'';
  this.errorCode = errorCode|| '';
}
Result.Fail = 'fail';
Result.Success = 'success';
module.exports = Result;