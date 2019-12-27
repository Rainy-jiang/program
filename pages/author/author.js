// pages/author/author.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    length:4,
    pay:'＋关注',
    flag:false,
    num:null
  },
  change(e){
    var _this = this;
    
    console.log(e)
    this.setData({
      flag:true,
      pay:'已关注',
      num:e.currentTarget.dataset.num
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'https://wujunhui.xyz/getwriters',
        success:(res) =>{
          this.setData({
            list:res.data
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