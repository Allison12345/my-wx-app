Page({
  data: {
    name: '此时此刻',
    author: '许巍',
    src: ''
  },
  onLoad() {
    wx.cloud.init()
    wx.cloud.getTempFileURL({
      fileList: [
        'cloud://mywxapp-q4z0b.6d79-mywxapp-q4z0b-1301425530/iWant.mp3'
      ],
      success: res => {
        const { tempFileURL } = res.fileList[0]
        this.setData({ src: tempFileURL })
      },
      fail: console.error
    })
  },
  onReady() {
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audio14() {
    this.audioCtx.seek(14)
  },
  audioStart() {
    this.audioCtx.seek(0)
  }
})
