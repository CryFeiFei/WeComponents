// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: 'home',
  },
  onChange(event) {
    this.setData({ active: event.detail });
    console.log(event.detail)
  },

  onLoad(){
    console.log("index")
  }
})
