// pages/view/Info/Info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[],
    jump:0,
    needInfo:[],
    flag1:false,
    flag2:true,
    flag3:true
  },
  alltab: function () {
    this.setData({
      flag1:false,
      flag2:true,
      flag3:true,
    })
  },
  pulltab: function () {
    this.setData({
      flag1: true,
      flag2: false,
      flag3: true,
    })
  },
  downtab: function () {
    this.setData({
      flag1: true,
      flag2: true,
      flag3: false,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.getStorage({
      key: 'infoList',
      success(res) {
        that.setData({
          info:res.data,
          jump:options.id
        })
        for(var i in that.data.info){
          let exchange = that.data.info[i].foods
          for(var j in exchange){
            if(that.data.jump==exchange[j].id){
               that.setData({
                 needInfo:exchange[j]
               })
               console.log(that.data.needInfo)
            }
          }
        }
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