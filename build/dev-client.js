require('eventsource-polyfill');
const hotClient = require('webpack-hot-middleware/client?reload=true');

hotClient.subscribe((e) => {
  console.log(e.action);
  if (e.action === 'reload') {
    window.location.reload();
  }
});
