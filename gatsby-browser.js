import 'lazysizes'
import { wrapPageElement as wrap } from './src/root-wapper'

export const wrapPageElement = wrap

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById(`___loader`).style.display = `none`
  }, 500)
}
