Page({
  data: {
    imgList: [
      'archive-outline',
      'arrow-circle-down-outline',
      'arrow-left-outline'
    ],
    imgIndex: 0
  },
  onPullDownRefresh: function() {
    let { imgIndex, imgList } = this.data
    if (imgIndex < imgList.length - 1) imgIndex++
    else imgIndex = 0
    this.setData({ imgIndex })
  }
})
