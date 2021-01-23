import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, faTree, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faDatabase, faTree, faTachometerAlt)
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
