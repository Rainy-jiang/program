// pages/sort/sort.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      length:5.5,
      num:0,
      newbook:[]
  },
  change(e){
    console.log(e)
    this.setData({
      num: e.currentTarget.dataset.num
    })
  },
  detail(e) {
    app.globalData.content = e.currentTarget.dataset.num;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://wujunhui.xyz/getfenleilist',
      success:(res) => {
        this.setData({
          list:res.data
        })
      }
    })
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res) => {
        this.setData({
          newbook: res.data.splice(1,3)
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