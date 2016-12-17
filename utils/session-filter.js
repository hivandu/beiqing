/**
 * Created by Hivan Du on 2016/12/4.
 */
module.exports = sessionFilter;
var defaultExclusionsFilterRegExps = [
    new RegExp('(/([?].*)*$)|(/images)|(/javascripts)|(/stylesheets)|(/api/.*)|(/console/login)')
];
function sessionFilter(req, res, next) {
  //允许跨域访问
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','x-requested-with,content-type');
  var flag = true;
  var originalUrl = req.originalUrl;
  for (var i = 0;i < defaultExclusionsFilterRegExps.length;i++){
    var  item = defaultExclusionsFilterRegExps[i];
    flag = !item.test(originalUrl);
    if(flag === false) {
      break;
    }
  }

  if((flag && !req.session.securityUser) === true){
    var err = new Error('Session Out');
    err.status = 403;
    res.status(err.status);
    next('console/login');
  }else{
    next();
  }
};

sessionFilter.setFilterRegExp = function (regexp) {
  if(regexp)defaultFilterRegExp = regexp;
};