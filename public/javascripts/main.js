$(function() {



  $('.fanye-tow').click(function() {
    var vote_id = parseInt($("#vote_id").val());
    var option_id = parseInt($(".cent p input").val());
    // var cen_p_in=$('.cent p input')
    if ($('.cent p input').is(':checked')) {
      jQuery.ajax({
        url: '/vote/submit',
        data: "vote_id=" + vote_id + "&option_id=" + option_id,
        dataType: "json",
        type: "post",
        success: function(data) {
          if (data.suc == 1) {
            // alert(data.info);
          } else if (data.suc == 0) {
            alert(data.info);
          } else {

          }
        }
      });

    } else {

      alert('请选择投票');
      return false;
      // return false;
    }
  });




  $('.button-kaishi a').click(function() {
    var username = $(".nam").val();
    var mobile = parseInt($(".shouji").val());
    if (username == "" || mobile == "") {
      alert("姓名和手机不能为空")
      return false;
    } else if (!(/^1[34578]\d{9}$/.test(mobile))) {
      alert('手机号码有误，请重填')
      return false;
    } else {
      jQuery.ajax({

        url: '/prize/prizescar20160918data',

        data: "username=" + username + "&mobile=" + mobile,
        dataType: "json",
        type: "post",
        success: function(data) {
          if (data.suc == 1) {
            // alert('data.errinfo');
            if (data.data.prize_level == 1) {
              $(".draw").css({
                display: 'block',
              });
              $(".draw .award").css({
                display: 'block',
              });
            } else if (data.data.prize_level == 5) {
              $(".draw").css({
                display: 'block',
              });
              $(".draw .Not").css({
                display: 'block',
              });
            }
          } else {
            alert(data.errinfo);
          }

        }

      });
    }



    return false;

  });

});
