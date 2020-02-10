Component({
  options: {
    addGlobalClass: true
  },
  properties: {
    label: String,
    items: Array,
    isOpen: Boolean,
    index: Number
  },
  ready() {
    const { items, label } = this.properties
    console.log(items, label)
  },
  methods: {
    onShow() {
      this.triggerEvent('changeIndex', this.properties.index)
    },
    onRouteTap(event) {
      const { path } = event.currentTarget.dataset
      wx.navigateTo({
        url: `/pages/${path}/index`
      })
    }
  }
})
