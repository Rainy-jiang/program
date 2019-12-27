// pages/author-detail/author-detail.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    author: null,
    list: [{
      num: 1286,
      title: '关注'
    }, {
      num: 3368,
      title: '粉丝'
    }, {
      num: 6673,
      title: '喜欢'
    }],
    content:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      author: app.globalData.author
    })
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success:(res) => {
        this.setData({
          content:res.data.splice(9,3)
        })
      }
    })
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