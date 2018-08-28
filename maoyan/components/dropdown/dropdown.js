// components/dropdown/dropdown.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    screen:Array,
    json:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    timeLeft:0,
    self:'自营',
    index:0,
    scroll_height: wx.getSystemInfoSync().windowHeight,
    scroll_bol: false,
    time: ['全部时间', '今天', '明天', '本周末','一周内','一个月内'],
    filterName: "",
    re_index:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click_scroll: function () {
      this.setData({
        "scroll_bol": !this.data.scroll_bol,
      })
    },
    filter_time(e) {
      let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      var oneDayTime = 24 *60 *60 *1000;
      //获取今天的时间
      var date = new Date();
      // 获取今天是周几 0 - 6 date.getDay()

      //周
      var timeLeft = date.getTime()-oneDayTime*(date.getDay()-1)
      var timeRight = date.getTime()+oneDayTime(7-date.getDay())
      var month = date.getMonth()
      this.setData({
        index: Index,
        "scroll_bol": !this.data.scroll_bol,
        're_index':e.target.dataset.index,
        timeLeft:date.getTime()
      });
    },
    click:function(){
      this.setData({
        "scroll_bol": !this.data.scroll_bol
      })
    }
  },
  created: function () {
    console.log(this.data.json)
  }
})
