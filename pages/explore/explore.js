// pages/explore/explore.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    list:[],
    showinfo:null,
    pick:[],
  },
  handle(e){
    console.log(e)
    app.globalData.content = e.currentTarget.dataset.num;
  },
  change(){
    this.setData({
      flag:true
    })
  },
  changes(){
    this.setData({
      flag:false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    flag:true
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res) => {
        this.setData({
          list: res.data
        })
      }
    })
    wx.request({
      url: 'https://wujunhui.xyz/getwriters',
      success: (res) => {
        this.setData({
          pick: res.data.splice(3,4)
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