var express = require('express');
var router = express.Router();
var voteService = require('../../services/vote');
var pugUtil = require('../../utils/pug-util');
var RenderData = require('../../utils/render-data');
var Pager = require('../../utils/pager-datatable');

/* GET vote home page API. */
router.get('/voteList', function(req, res, next) {
  var id = req.query.id;
  var pager = new Pager();
  voteService.getVoteInfo(id, function (result) {
    // pugUtil.renderView(res,'vote/index',{data:result.data});
    //res.json(records);
    pager.parsePagerData(result);
    res.json(pager);
  });
});

router.post('/submitVote', function (req, res, next) {
  var voteData = req.body['voteData'];
  voteService.submitVoteData(JSON.parse(voteData), function (result) {
    if(result.status=='success'){
      res.render('vote/lottery',result.data);
    }else{
      res.render('vote/lottery',result.data);
    }
  });
});


router.post('/lottery', function (req, res, next) {
  var voterId = req.body['voterId'];
  voteService.lottery(voterId, function (result) {
      res.json(result);
  });
});
module.exports = router;
