// pages/detail/detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:null,
    flag:true,
    show:true,
    share:true
  },
  change(){
    if(!this.data.flag){
      this.setData({
        flag: true
      })
    }else{
      this.setData({
        flag: false
      })
    }
  },
  handle(){
    this.setData({
      show:false
    })
  },
  handles(){
    this.setData({
      show:true
    })
  },
  shares(){
    this.setData({
      share:false
    })
  },
  sharex(){
    this.setData({
      share:true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      content:app.globalData.content
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