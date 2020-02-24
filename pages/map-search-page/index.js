Page({
  data: {
    searchText: ''
  },
  onTap() {
    wx.navigateTo({
      url: '/pages/map/index'
    })
  },
  onConfirm(e) {
    this.setData({ searchText: e.detail.value })
    wx.navigateTo({
      url: '/pages/map/index',
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('/pages/map/index', {
          data: this.data.searchText
        })
      }
    })
    console.log(e.detail.value)
  }
})
