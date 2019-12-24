// pages/explore/explore.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1,
    url: 'https://wujunhui.xyz/book-santi.png',
    title: '三体：死神永生',
    author: '刘慈欣',
    list: [
      'https://wujunhui.xyz/zz-wzj.png',
      'https://wujunhui.xyz/zz-zdh.png',
      'https://wujunhui.xyz/zz-zxj.png',
      'https://wujunhui.xyz/zz-zxl.png',
    ]
  },
  change: function(e) {
    console.log(e)
    this.setData({
      num:e.target.dataset.num
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})