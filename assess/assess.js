// pages/components/assess/assess.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[],
    dataList:[],
    flag1:false,
    flag2:false,
    flag3:false,
    iconType: [
     'success'
    ]
  },
  attached() {
    var that = this
    // wx.getStorage({
    //  key: 'shuju',
    //   success(res) {
    //     that.setData({
    //       list : res.data
    //     })
    //     console.log(that.data.list)
    //   }
    // })
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/seller',
      type:'GET',
      success:function(res) {
        // console.log(res)
        that.setData({
          list : res.data.seller
        })
        // console.log(that.data.list)
      }
    })
    // 评论  https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/ratings
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/ratings',
      type: 'GET',
      success: function (res) {
        // console.log(res)
        that.setData({
          dataList: res.data.ratings
        })
        // console.log(that.data.dataList)
      }
    })     
  },
  


  /**
   * 组件的方法列表
   */
  methods: {
    All:function() {
      this.setData({
        flag1: false,
        flag2: true,
        flag3: true
      })
    },
    goods: function () {
      this.setData({
        flag1: true,
        flag2: false,
        flag3: true
      })
    },
    notgood: function () {
      this.setData({
        flag1: true,
        flag2: true,
        flag3: false
      })
    },



  }
})
