// TODO 后期需要增加webpack-hot-middleware监听模版页index.html变化的刷新问题
require('eventsource-polyfill')
const hotClient = require('webpack-hot-middleware/client?reload=true')

hotClient.subscribe((e) => {
  console.log(e.action)
  if (e.action === 'reload') {
    window.location.reload()
  }
})
