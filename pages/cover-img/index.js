Page({
  data: {
    imgList: [
      'archive-outline',
      'arrow-circle-down-outline',
      'arrow-left-outline'
    ].map(name => `https://unpkg.com/eva-icons/outline/png/128/${name}.png`),
    imgIndex: 0
  },
  onPullDownRefresh() {
    let { imgIndex, imgList } = this.data
    if (imgIndex < imgList.length - 1) imgIndex++
    else imgIndex = 0
    this.setData({ imgIndex })
  }
})
