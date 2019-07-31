// pages/logs/logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      show : true,
      flag1 : true,
      flag2 : true,
      flag3 : true,
      list :[]
  },
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
      wx.request({
        url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/seller',
        method:'GET',

        success:function(res) {
          that.setData({
            list : res.data.seller
          })
          console.log(that.data.list)
          
        },
        fail: function (err) {
          //失败执行 
          console.log(err)
        }
      })
    },

  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     this.cover = this.selectComponent('#cover')
  },
  //遮罩显示  隐藏
  Covershow : function() {
    this.cover.Covershow()
  },
  close : function () {
    this.cover.close()
  },
  //切换
  shop : function() {
     flag1 : !this.data.flag1
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**s
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