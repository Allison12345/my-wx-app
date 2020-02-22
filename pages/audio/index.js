Page({
  data: {
    poster:
      'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src:
      'http://play.taihe.com/?__m=mboxCtrl.playSong&__a=606650264&fr=altg_new3||www.baidu.com#'
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
    this.audioCtx(0)
  }
})
