Page({
  data: {
    swiperItems: ['text-1', 'text-2', 'text-3'],
    indicatorDots: true,
    interval: 2000,
    duration: 500,
    autoplay: false
  },
  onDotsChange() {
    this.setData({ indicatorDots: !this.data.indicatorDots })
  },
  onAutoPlayChange() {
    this.setData({ autoplay: !this.data.autoplay })
  }
})
