Page({
  data: {
    focus: false
  },
  onTextAreaBlur(e) {
    console.log(e)
  },
  onInput(e) {
    console.log('input', e)
  },
  onTap(e) {
    this.setData({ focus: true })
  },
  onFormSubmit(e) {
    console.log('submit', e)
  }
})
