Page({
  data: {
    address: '搜索地点',
    longitude: '',
    latitude: '',
    markers: [
      {
        iconPath: '',
        id: 0,
        latitude: '',
        longitude: '',
        callout: {
          content: ''
        }
      }
    ]
  },
  onLoad(query) {
    const { lat, lng, address } = query
    if (address) {
      this.setData({ address })
    }
    if (lat && lng) {
      this.setPostion(lat, lng)
    } else {
      this.getCurrentLocation()
    }
  },
  getCurrentLocation() {
    wx.getLocation({
      success: res => {
        this.setPostion(res.latitude, res.longitude)
      }
    })
  },
  setPostion(lat, lng) {
    const { markers } = this.data
    markers[0].latitude = lat
    markers[0].longitude = lng
    markers[0].callout.content = `(${lat},${lng})`
    this.setData({
      markers,
      latitude: lat,
      longitude: lng
    })
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
  }
})
