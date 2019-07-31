// pages/components/cover/cover.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     shuju:{
       type:String
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
     show:true,
     list:[]
  },  
  /**
   * 组件的方法列表
   */
  onLoad:function(){
     console.log(this.properties.shuju)
  },
  methods: {
     Coverhide(){
       this.setData({
         show: !this.data.show 
       })
     },
     Covershow(){
       this.setData({
         show: !this.data.show
       })
     }
  }
})
