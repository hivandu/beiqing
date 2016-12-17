/**
 * Created by Hivan Du on 2016/12/4.
 */
;(function ($, win, doc) {
  $(function () {
    $('.btn-primary').click(function (e) {
      $.ajax('',{
        type: "POST"
        ,data: $('#loginForm').serialize()
        ,dataType: 'json'
        ,success: function (data) {
          if(data.status == 'success'){
            win.location.href = 'index';
          }
        }
      });
    });
  })
})($, window, document);