import '../styles/globals.css'
import Main from '../components/layout/main'

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  )
}

export default MyApp
