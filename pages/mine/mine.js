// pages/mine/mine.js
<<<<<<< HEAD
const app = getApp()
=======
>>>>>>> books
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    pickurl: '',
    nickname: '',
    country: '',
    province: '',
    city: '',
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
    arry: [{
      title: '个人信息',
      icon: '>'
    }, {
      title: '我的消息',
      icon: '>'
    }, {
      title: '账户余额',
      icon: '>'
    }, {
      title: '我的评论',
      icon: '>'
    }, ]
=======

>>>>>>> books
  },

  /**
   * 生命周期函数--监听页面加载
   */
<<<<<<< HEAD
  onLoad: function() {
    this.setData({
      pickurl: app.globalData.avatarUrl,
      nickname: app.globalData.nickName,
      country: app.globalData.country,
      province: app.globalData.province,
      city: app.globalData.city
    })
=======
  onLoad: function (options) {

>>>>>>> books
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
<<<<<<< HEAD
  onReady: function() {
=======
  onReady: function () {
>>>>>>> books

  },

  /**
   * 生命周期函数--监听页面显示
   */
<<<<<<< HEAD
  onShow: function() {
=======
  onShow: function () {
>>>>>>> books

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
<<<<<<< HEAD
  onHide: function() {
=======
  onHide: function () {
>>>>>>> books

  },

  /**
   * 生命周期函数--监听页面卸载
   */
<<<<<<< HEAD
  onUnload: function() {
=======
  onUnload: function () {
>>>>>>> books

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
<<<<<<< HEAD
  onPullDownRefresh: function() {
=======
  onPullDownRefresh: function () {
>>>>>>> books

  },

  /**
   * 页面上拉触底事件的处理函数
   */
<<<<<<< HEAD
  onReachBottom: function() {
=======
  onReachBottom: function () {
>>>>>>> books

  },

  /**
   * 用户点击右上角分享
   */
<<<<<<< HEAD
  onShareAppMessage: function() {
=======
  onShareAppMessage: function () {
>>>>>>> books

  }
})