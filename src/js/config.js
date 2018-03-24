import kintoneUtility from 'kintone-utility/docs/kintoneUtility'

const pluginId = kintone.$PLUGIN_ID
const pluginConfig = kintone.plugin.app.getConfig(pluginId) || {}
const config = {
  name: pluginConfig.name || '',
  textField: pluginConfig.textField || ''
}

new Vue({
  el: '#app',
  data: {
    config: config,
    textFields: [],
  },
  created () {
    kintoneUtility.rest.getFormFields({
      app: kintone.app.getId(),
      lang: 'default'
    })
    .then(response => {
      Object.keys(response.properties).forEach(key => {
        const property = response.properties[key]
        if (property.type === 'SINGLE_LINE_TEXT' || property.type === 'MULTI_LINE_TEXT') {
          this.textFields.push(property)
        }
      })
    })
    .catch(err => {
      console.error(err)
    })
  },
  methods: {
    onsubmit () {
      kintone.plugin.app.setConfig(this.config)
    },
    cancel () {
      history.back()
    }
  }
})
