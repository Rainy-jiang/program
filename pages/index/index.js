//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    ranking:'分类排行',
    authorrank:'作者排行',
    newrealease:'新发布',
    popular:'热门搜索',
    hotsales:'热销量',
    seeall:'查看全部',
    length: 3.5,
    nums:1.1,
    path: ['/pages/science/science', '/pages/science/science', '/pages/science/science', '/pages/science/science', '/pages/science/science', '/pages/science/science', '/pages/science/science',],
    list:[],
    author:[],
    book:[],
    populars:[],
    hotlist: ['#f54d82', '#59b080', '#ec575e', '#9060e8', '#ded658'],
    volume:[]
  },
  detail(e) {
    app.globalData.content = e.currentTarget.dataset.num;
  },
  handle(e){
    app.globalData.author = e.currentTarget.dataset.num;
  },

  onLoad: function() {
    wx.request({
      url: 'https://wujunhui.xyz/getfenleilist',
      success: (res) =>{
        this.setData({
          list:res.data
        })
      }
    })
    wx.request({
      url: 'https://wujunhui.xyz/getwriters',
      success: (res) => {
        this.setData({
          author: res.data
        })
      }
    })
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res) => {
        this.setData({
          book: res.data.splice(0,6)
        })
      }
    })
    wx.request({
      url: 'https://wujunhui.xyz/getbooks',
      success: (res) => {
        this.setData({
          volume: res.data
        })
      }
    })
    wx.request({
      url: 'https://wujunhui.xyz/gethostser',
      success: (res) => {
        this.setData({
          populars: res.data
        })
      }
    })
    this.setData({
      hotlist:this.data.hotlist.sort((a,b) => {
        return Math.random() - 0.5
      })
    })
    

  },
})