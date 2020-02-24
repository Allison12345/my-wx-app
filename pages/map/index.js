Page({
  data: {
    searchText: '',
    markers: [
      {
        iconPath: '/resources/others.png',
        id: 0,
        latitude: 23.099994,
        longitude: 113.32452,
        width: 50,
        height: 50
      }
    ],
    polyline: [
      {
        points: [
          {
            longitude: 113.3245211,
            latitude: 23.10229
          },
          {
            longitude: 113.32452,
            latitude: 23.21229
          }
        ],
        color: '#FF0000DD',
        width: 2,
        dottedLine: true
      }
    ]
  },
  onRouteChange() {
    wx.navigateTo({
      url: '/pages/map-search-page/index',
      events: {
        acceptDataFromOpenedPage: function(data) {
          this.setData({ searchText: data })
        }
      }
    })
  },
  observers() {
    console.log(this.data.searchText)
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onTap(e) {
    console.log(e.detail)
  },
  onChange(e) {
    this.setData({ searchText: e.detail.value })
  }
})
