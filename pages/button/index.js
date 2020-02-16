Page({
  data: {
    buttonList: [
      {
        type: 'primary',
        size: 'default'
      },
      { type: 'warn', size: 'default', plain: false },
      { type: 'default', size: 'default', loading: false },
      { type: 'primary', size: 'mini', disabled: false }
    ].map((item, index) => ({ ...item, index }))
  },
  onTap(e) {
    const { item } = e.currentTarget.dataset
    const fn = this[`method${item.index}`]
    fn && fn(item.index)
  },
  btnMethod(index, key, values) {
    const { buttonList } = this.data
    const btn = buttonList[index]
    if (btn[key] === values[0]) {
      btn[key] = values[1]
    } else {
      btn[key] = values[0]
    }
    this.setData({ buttonList })
  },
  method0(index) {
    this.btnMethod(index, 'size', ['default', 'mini'])
  },
  method1(index) {
    this.btnMethod(index, 'plain', [false, true])
  },
  method2(index) {
    this.btnMethod(index, 'loading', [false, true])
  },
  method3(index) {
    console.log('method3')
    this.btnMethod(index, 'disabled', [false, true])
  }
})
