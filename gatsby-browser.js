import 'lazysizes'
import { wrapPageElement as wrap } from './src/root-wapper'

export const wrapPageElement = wrap

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById(`___loader`).style.display = `none`
  }, 1500)
}
