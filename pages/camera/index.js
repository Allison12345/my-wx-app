Page({
  data: {
    pic: '',
    isShown: false
  },
  onScancode(e) {
    console.log(e)
  },
  takePhoto() {
    if (this.data.isShown) {
      const ctx = wx.createCameraContext()
      ctx.takePhoto({
        quality: 'high',
        success: res => {
          this.setData({
            pic: res.tempImagePath,
            isShown: false
          })
        }
      })
    }
  },
  openCamera() {
    this.setData({ isShown: true })
  }
})
