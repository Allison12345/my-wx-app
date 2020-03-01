const QQMap = require('../../libs/qqmap')
const qqmap = new QQMap({
  key: 'XLOBZ-4RJ64-7ROUN-D4ORI-HDZFS-CVBHY'
})
Page({
  onBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  onConfirm(e) {
    console.log(e)
    const address = e.detail.value
    qqmap.geocoder({
      address,
      success: res => {
        console.log(res)
        const { lat, lng } = res.result.location
        wx.navigateBack({
          delta: 1,
          success: () => {
            wx.redirectTo({
              url: `/pages/map/index?lat=${lat}&lng=${lng}&address=${address}`
            })
          }
        })
      },
      fail: err => {
        wx.showToast({
          title: err.message,
          icon: 'none'
        })
      }
    })
  }
})
