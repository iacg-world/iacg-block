import { App } from 'vue'
import CShape from './CShape.vue'
CShape.install = (app: App) => {
  app.component(CShape.name, CShape)
}

export default CShape
