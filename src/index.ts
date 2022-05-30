import { App } from 'vue'

import CText from './components/CText'
import CImage from './components/CImage'
import CShape from './components/CShape'

const components = [CText, CImage, CShape]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export { CText, CImage, CShape, install }
export default {
  install,
}
