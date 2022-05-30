import { App } from 'vue'
import CText from './CText.vue'
CText.install = (app: App) => {
  app.component(CText.name, CText)
}

export default CText
