Page({
  data: {
    percentData: 100
  },
  onActicveend(e) {
    console.log(e)
    this.setData({ percentData: 0 })
  }
})
