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
    vertical: false,
    circular: true,
    length: 3.5,
    list: [{
      title: '科幻',
      url: 'https://wujunhui.xyz/fenlei1.png'
    }, {
      title: '生活',
      url: 'https://wujunhui.xyz/fenlei2.png'
    }, {
      title: '露营',
      url: 'https://wujunhui.xyz/fenlei3.png '
    }, {
      title: '职场',
      url: 'https://wujunhui.xyz/fenlei2.png '
    }, {
      title: '露营',
      url: 'https://wujunhui.xyz/fenlei3.png '
    }],
    author: [{
      name: '刘慈欣',
      url: 'https://wujunhui.xyz/zz-lcx.png'
    }, {
      name: '田小花',
        url: 'https://wujunhui.xyz/zz-txh.png'
    }, {
      name: '马尔克斯',
        url: 'https://wujunhui.xyz/zz-meks.png'
    }, {
      name: '余秋雨',
        url: 'https://wujunhui.xyz/zz-txh.png'
    }, {
        name: '马尔克斯',
        url: 'https://wujunhui.xyz/zz-meks.png'
    }],
    book:[{
      title:'三体:死神永生',
      author:'刘慈欣',
      url:'https://wujunhui.xyz/book-santi.png',
    },{
      title:'人类简史',
      author:'尤瓦尔·赫拉利',
        url:'https://wujunhui.xyz/book-rljs.png'
      }, {
        title: '徐三关卖血记',
        author: '余华',
        url: 'https://wujunhui.xyz/book-xsgmxj.png'
      }, {
        title: '未来简史',
        author: '尤瓦尔·赫拉利',
        url: 'https://wujunhui.xyz/book-wljs.png'
      }, {
        title: '自私的基因',
        author: '理查德·道金斯',
        url: 'https://wujunhui.xyz/book-zsdjy.png'
      }, {
        title: '百年孤独',
        author: '马尔克斯',
        url: 'https://wujunhui.xyz/book-bngd.png'
      }]
  },

  onLoad: function() {

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})