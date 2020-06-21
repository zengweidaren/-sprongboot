// pages/update/update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:null
  },
  addProduct:function(options){
    var that=this;
    console.log(options);
      wx.request({
        url: 'http://localhost:8080/update',
        data: {
          id: that.options.id,
          pname: options.detail.value.pname,
          pprice: options.detail.value.pprice,
          pcount: options.detail.value.pcount,
        },
        success: function (res) {
          console.log(res);
          if (res.data == "ok") {
            wx.showToast({
              title: '修改成功！',
             
            })
            wx.navigateTo({
              url: '../index/index',
            })
           
          }else{
            wx.showToast({
              title: '修改失败！',
            })
            
            that.setData({
              product:null
            })
            wx.navigateTo({
              url: '../index/index',
            })
          }
        }
      })
    
   
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that=this;
    if(options!=null){
      wx.request({
        url: 'http://localhost:8080/getProductById',
        data:{
          id:options.id
        },
        success:function(res){
          console.log(res);
          that.setData({
            product:res.data
          })
        }
      })
    }
   
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