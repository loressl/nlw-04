import '../styles/global.css'
import {LoginProvider} from '../contexts/LoginContext'

function MyApp({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Component {...pageProps} />
    </LoginProvider>
  )
}

export default MyApp
