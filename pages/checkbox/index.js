Page({
  data: {
    checkboxList: [
      ['USA', '美国'],
      ['CHN', '中国'],
      ['BRA', '巴西', true],
      ['JPN', '日本'],
      ['ENG', '英国'],
      ['TUR', '法国']
    ].map(([value, label, checked]) => ({ value, label, checked })),
    checkedList:[]
  },
  onChange(e) {
    const checkedList = e.detail.value
    this.setData({ checkedList })
  }
})
