// components/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 是否显示指示点（锚点）
    indicatorDots: true,
    // 当前点击时候的index索引
    // 建议在标签里面去写
    //current:'???'
    // 指示点颜色
    indicatorColor: 'rgba(100, 0, 0, .3)',
    // 被选中颜色点
    indicatorActiveColor: 'white',
    // 是否不返回滑动
    circular:true,
    //是否自动切换
    autoplay: true,
    //自动切换时间间隔
    interval: 5000,
    // 滑动动画时长
    duration: 1000,
    // 可以露出后一项的一小部分
    // (页面会出现异常; 建议用大间距的时候 使用这种方案)
    nextMargin: "0px",
    width: wx.getSystemInfoSync().windowWidth
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

