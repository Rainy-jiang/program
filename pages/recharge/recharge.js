// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:true,
    isvalue:''
  },
  content(e){
    var reg = /^[0-9]{1,5}$/;
    var cost = e.detail.value;
    if(cost == ''){
      wx.showToast({
        title: '请输入充值金额',
        icon:'none'
      })
    }else if (!reg.test(cost)){
      wx.showToast({
        title: '输入内容为数字，不能为负数，长度为1-5位',
        icon: 'none',
      })
    }else{
      this.setData({
        isvalue: e.detail.value
      })
    }
   
  },
  handle(){
    this.setData({
      flag:false
    })
  },
  handles(){
    this.setData({
      flag: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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