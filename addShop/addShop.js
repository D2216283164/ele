// pages/components/addShop/addShop.js
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
    shopList:[]
  },
  attached(){
    var that = this
     wx.request({
       url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/goods',
       method:'GET',
       success:function(res){
         console.log(res)
         let mod = res.data.goods
         let id = 1
         for(var i in mod){
           let info = mod[i].foods
           for(var j in info){
             info[j].id=id++
            //  console.log(info[j])
           }
         }
         that.setData({
           shopList:mod
         }) 
         wx.setStorage({
           key: "infoList",
           data: that.data.shopList
         })
       }
     })
  },
  /**
   * 组件的方法列表
   */
  methods: {
     goInfo:function(event){
       var id = event.target.dataset.id
       wx.navigateTo({
         url: '../../view/Info/Info?id='+id
       })
     }
  }
})
