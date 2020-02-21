Page({
  data: {
    inputValue: '',
    replaceValue: ''
  },
  onCurrentInput(e) {
    let inputValue = e.detail.value
    this.setData({ inputValue })
  },
  onReplaceInput(e) {
    let { value } = e.detail
    if (value.includes('11')) {
      value = value.replace(/11/g, '2')
    }
    this.setData({ replaceValue: value })
  },
  onHideKeyboard(e) {
    let value = e.detail.value
    if (value.includes('123')) {
      wx.hideKeyboard()
    }
  }
})
