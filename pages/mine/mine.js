// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.setData({
      pickurl: app.globalData.avatarUrl,
      nickname: app.globalData.nickName,
      country: app.globalData.country,
      province: app.globalData.province,
      city: app.globalData.city
    })
  }
})
