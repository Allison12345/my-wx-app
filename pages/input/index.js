Page({
  data: {
    inputValue: ''
  },
  onCurrentInput(e) {
    let inputValue = e.detail.value
    this.setData({ inputValue })
  },
  onReplaceInput(e) {
    let value = e.detail.value
    let cursor = e.detail.cursor
  },
  onHideKeyboard(e) {
    let value = e.detail.value
    if (value.includes('123')) {
      wx.hideKeyboard()
    }
  }
})
