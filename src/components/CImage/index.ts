import { App } from 'vue'
import CImage from './CImage.vue'
CImage.install = (app: App) => {
  app.component(CImage.name, CImage)
}

export default CImage
