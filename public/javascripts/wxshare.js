wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: $('#appId').val(), // 必填，公众号的唯一标识
    timestamp: $('#timestamp').val(), // 必填，生成签名的时间戳
    nonceStr: $('#nonceStr').val(), // 必填，生成签名的随机串
    signature: $('#signature').val(),// 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});

wx.ready(function(){
  //分享到朋友圈
    //alert('hii~'+$('#url').val());
  wx.onMenuShareTimeline({
      title: $('#title').val(), // 分享标题
      link: $('#url').val(), // 分享链接
      imgUrl: $("#share_pic_url").val(), // 分享图标,'http://zt.bjnews.com.cn/market/baby2015vote/img/hr_pic.jpg'
      success: function () { 
          // 用户确认分享后执行的回调函数
      },
      cancel: function () { 
          // 用户取消分享后执行的回调函数
      }
  });
    
  
  //分享到朋友
  wx.onMenuShareAppMessage({
      title: $('#title').val(), // 分享标题
      desc: $('#description').val(), // 分享描述
      link: $('#url').val(), // 分享链接
      imgUrl: $("#share_pic_url").val(), // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () { 
          // 用户确认分享后执行的回调函数
      },
      cancel: function () { 
          // 用户取消分享后执行的回调函数
      }
  });

});
//alert($('#url').val());
