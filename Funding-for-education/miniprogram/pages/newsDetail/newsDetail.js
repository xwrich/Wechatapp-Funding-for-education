// pages/newsDetail/newsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{
      "title":"电力物联网发展潜力001",
      "date":"2020.04.22",
      "img":'/image/link01.jpg',
      "detail":`如果电线能传递信号，电器在接入电网的同时能够实现联网，是不是既能省去铺设光纤电缆的成本，又能避免路由器带来的辐射威胁？

　　用电线传递信号，听起来像天方夜谭，实则已经历了近百年的技术演进。至今，基于电力线通信技术(PLC，Power Line Communication)的“电力猫”依然被应用于家庭和办公等小型场景，作为有线和无线通信的替代方案。

　　尽管美欧日等发达国家和地区频频加码电力通信技术，其速率提升效果却不尽如人意，该技术目前主要还是应用于远程抄表等低速率场景。中国电网规模在2009年跃居全球第一，虽然电力线通信技术的应用领域仍较为狭窄，但在智慧电网的改造中却有广阔市场空间。

　　在市场需求的支撑下，部分产业链上下游企业脱颖而出。力合微电子，是一家专业集成电路设计企业，拥有物联网通信核心基础技术及底层算法，其设计的芯片主要用于电力线通信领域，着力解决物联网系统“最后1公里”的通信难题，以实现进口替代。

　　从2016年到2018年，力合微业绩高速增长，主营业务收入从1.12亿元增长至1.87亿元。除了营收增长外，力合微“高速电力线通信线路驱动芯片”也于2019年研发成功并取得规模预售订单，打破德州仪器等海外厂商的垄断。传输速率的提升，也将进一步拓宽电力线通信技术的应用领域。

　　电力线通信技术在智慧城市和智能家居场景下的应用前景如何？能否挑战WiFi、ZigBee和蓝牙技术在物联网行业的地位，与5G一起成为物联网

　　电力线通信技术原理并不复杂：将含有信息的高频电波加载于电流，带着高频电波的电流经过电线传输到达终端后，终端的适配器再将高频电波从电流中分离出来，完成信息传递。`
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取get id
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})