// pages/books/books.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
      reading:'正在阅读',
      readed:'未读',
      more:'查看全部',
      list:[],
      unread:[],

  },
  detail(e){
    console.log(e)
    app.globalData.content = e.currentTarget.dataset.num;
    console.log(app.globalData.content)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res) => {
        this.setData({
          list: res.data.splice(0,3),
          unread:res.data.splice(5,6)
        })
      }
    })

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