const homeList = require('./homeList')
const DEFAULT_INDEX = -1
Page({
  data: {
    list: homeList,
    selectedIndex: DEFAULT_INDEX
  },
  changeIndex(event) {
    let selectedIndex = event.detail
    if (this.data.selectedIndex === selectedIndex) selectedIndex = DEFAULT_INDEX
    this.setData({ selectedIndex })
  }
})
