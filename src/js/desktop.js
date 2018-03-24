const pluginId = kintone.$PLUGIN_ID
const config = Object.assign({
  name: '(no name)'
}, kintone.plugin.app.getConfig(pluginId) || {})

kintone.events.on('app.record.detail.show', (event) => {
  console.log('config=%o', config)
  return event
})
