// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList:[]
  },
  oper:function(options){
    console.log(options);
    var that=this;
    if(options.currentTarget.dataset.oper=="del"){
      wx.request({
        url: 'http://localhost:8080/delProduct',
        data: {
          
          id: options.currentTarget.dataset.id
        },
        success:function(res){
          if(res.data=="ok"){
            wx.showToast({
              title: '删除成功！',
            })
            that.getAllProduct();
          }
        }
      })
    }else{
      wx.navigateTo({
        url: '../update/update?id=' + options.currentTarget.dataset.id
      })
    }
   
  },



  addProduct:function(){
    wx.navigateTo({
      url: '../add/add',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getAllProduct:function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/showAllProduct',
      success: function (res) {
        console.log(res);
        that.setData({
          productList: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   this.getAllProduct();
  wx.cloud.database().collection('imageList').where({
    'name':'abc'
  }).update({
    data:{
      'name':'1111111'
    }
  })
  },

  
})