Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    label: String,
    items: Array,
    isOpen: Boolean,
    index: Number
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
