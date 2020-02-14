Page({
  data: {
    x: 30,
    y: 30,
    scale: '1'
  },
  onScale(e) {
    console.log(e.detail)
  }
})
