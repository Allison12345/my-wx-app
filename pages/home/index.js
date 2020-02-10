const DEFAULT_INDEX = -1
Page({
  data: {
    list: [
      {
        label: '视图容器',
        items: [
          {
            label: 'cover-img',
            path: 'cover-img'
          }
        ]
      },
      {
        label: '基础内容',
        items: [
          {
            label: 'icon',
            path: 'icon'
          }
        ]
      }
    ],
    selectedIndex: DEFAULT_INDEX
  },
  changeIndex(event) {
    let selectedIndex = event.detail
    if (this.data.selectedIndex === selectedIndex) selectedIndex = DEFAULT_INDEX
    this.setData({ selectedIndex })
  }
})
