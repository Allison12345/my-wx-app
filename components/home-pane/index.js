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
    }
  }
})
