/**
 * Created by Hivan Du on 2016/11/26.
 */


;
(function(doc, win, $, Vue) {

  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    watchSlidesProgress: true,

    // 关闭拖动
    onlyExternal: true,
  });

  // vue绑定
  var app = new Vue({
    created: function() {
      this.getListData();
      console.log('create by @hivan & @jinchun Use "Vue"; doo[at]hivan.me');
    },
    ready: function() {
      mySwiper.update();
    },
    el: '#app',
    data: function() {
      return {
        regulations: false,
        carListStatus: false,
        lock: false,
        selectName: '请选择车型',
        mySwiper: {},
        sendList: [],
        canClose: false,
        fruitStatus: false,
        nextHide: true,
        propress: Number,
        viewData: [],
        ticketResult: [],
        reslutData: null,
        selectID: '',
        personName: '',
        personPhone: '',
        nextButton: true,
        selectStatus:'请先选择投票'
      }
    },
    methods: {
      regulationsShow: function() {
        this.regulations = true;
      },

      regulationsHide: function() {
        this.regulations = false;
      },

      carListShow: function() {
        this.carListStatus = true;
        $.ajax({
          type: 'get',
          url: '/ticket/api/vote/list?id=100',
          success: function(data) {
            this.viewData = data;
          }
        })
      },

      // 关闭按钮事件
      carListHide: function(index) {
        if (this.canClose) {
          this.unlockSwiper();
          this.$set('selectName', '选项完成，请点击下一步');
          this.carListStatus = false;
          console.log(this.selectID);
          this.sendResult();
          this.nextButton = true;
        } else {
          alert('您有表单未填写，请继续填写表单');
        }
      },

      // radio change事件
      theSelect: function(select, element, name, result) {
        var _form = $('#' + name);
        var _array = _form.serializeArray();
        console.log(_array);

        var _select = select;
        var _element = element;
        var _length = result.length;

        var _selectID = [];

        for (var i = 0; i < _array.length; i++) {
          var _id = _array[i].value;
          _selectID.push(_id);
        }

        _selectID = JSON.stringify(_selectID);

        this.$set('selectID', _selectID);

        if (_array.length == _length) {
          this.canClose = true;
          this.selectStatus = '选票完成，点击关闭';
          console.log(this.canClose)
        } else {
          this.selectStatus = '请继续填写其他选项';
          this.canClose = false;
          console.log(this.canClose);
        }
        // this.carListHide();
      },

      // 下一步按钮
      nextSwiperClick: function(index) {
        if (this.lock) {
          alert('请选择投票');
        } else {
          this.nextButton = false;
          this.$set('selectName', '请选择车型');
          this.lockSwiper();
          this.fruitClose();
        }
      },

      // 锁定swiper
      lockSwiper: function() {
        mySwiper.lockSwipes();
        this.$set('lock', true);
      },

      // 解锁swiper
      unlockSwiper: function() {
        mySwiper.unlockSwipes();
        this.$set('lock', false);
      },

      // 打开结果页面
      fruitClick: function(id) {
        var _this = this;
        this.fruitStatus = true;
        console.log(id);
        $.ajax({
          type: 'get',
          url: '/ticket/api/vote/listCount?id=100',
          // url: '../listResult.json',
          success: function(data) {
            if (id == 110) {
              var _data = data.result.topVote.secVote[0];
              _this.ticketShow(_data);
            } else {
              var _data = data.result.topVote.secVote[1];
              _this.ticketShow(_data);
            }
          }
        })
      },

      fruitClose: function() {
        this.fruitStatus = false;
      },

      nameInput: function() {
        $('.name input').focus();
      },

      phoneInput: function() {
        $('.phone input').focus();
      },

      // 获取车型数据
      getListData: function() {
        var _this = this;
        $.ajax({
          type: 'get',
          url: '/ticket/api/vote/list?id=100',
          async: false,
          success: function(data) {
            _this.reslutData = data;
            _this.$set('viewData', data.result.topVote.secVote);
          }
        })
      },

      // 传递选择结果
      sendResult: function() {
        var _this = this;
        $.ajax({
          type: 'POST',
          url: '/ticket/api/vote/saveResult',
          data: { result: _this.selectID },
          success: function(data) {
            console.log('sendResult status is ok');
          }
        })
      },

      // 处理查询结果
      ticketShow: function(data) {
        var _list = data.subVote;
        console.log(_list);
        var _total;
        for (var i = 0; i < _list.length; i++) {
          _total = 0;
          _option = _list[i].options;
          for (var j = 0; j < _option.length; j++) {
            _total += _option[j].optionCount;
            console.log(_total);
            _list[i]['total'] = _total;
          }
          console.log(_list);
        }
        this.$set('ticketResult', _list);
        console.log(this.ticketResult);
      },

      // 计算百分比
      count: function(optionCount, total) {
        var _count = optionCount / total * 100;
        _count = parseInt(_count);
        console.log(_count);
        return _count;
      },

      // 提交个人信息
      person: function() {
        var _this = this;
        var _data = {};

        var _status = this.mobileFormat(_this.personPhone);

        if (_status) {
          _data['name'] = _this.personName;
          _data['mobile'] = _this.personPhone;
          _data['voteId'] = _this.reslutData.result.topVote.topId;

          _data = JSON.stringify(_data);

          $.ajax({
            type: 'POST',
            url: '/ticket/api/vote/saveVoterInfo',
            data: { result: _data },
            success: function(data) {
              if (data.status == 'success') {
                alert('提交成功, 请持续关注本次评选，我们将于1月4日统一公示获奖名单，分享好友也来参与抽奖吧~');
              }else{
                alert(data.msg);
              }
            },
            error: function(data) {
            }
          })
        }
      },

      // 手机号码验证
      mobileFormat: function(num) {
        if (!(/^1[34578]\d{9}$/.test(num))) {
          alert('手机号码有误，请重新填写');
          return false;
        }
        return true;
      }
    }
  });

})(document, window, jQuery, Vue);
