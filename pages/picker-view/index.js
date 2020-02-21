const date = new Date()
const years = []
const months = []
const days = []
for (var i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}
for (var i = 1; i <= 12; i++) {
  months.push(i)
}
for (var i = 1; i <= 31; i++) {
  days.push(i)
}
Page({
  data: {
    years: years,
    year: 1998,
    months: months,
    month: 7,
    days: days,
    day: 14,
    value: [1, 1, 1]
  },
  onChange(e) {
    const left = e.detail.value
    console.log(e)
    this.setData({
      year: this.data.years[left[0]],
      month: this.data.months[left[1]],
      day: this.data.days[left[2]]
    })
  }
})
