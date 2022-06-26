import { App } from 'vue'

import CText from './components/CText'
import CImage from './components/CImage'
import CShape from './components/CShape'
import FinalPage from './components/FinalPage'

const components = [CText, CImage, CShape, FinalPage]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { install, CText, CImage, CShape, FinalPage }
export default {
  install,
}
