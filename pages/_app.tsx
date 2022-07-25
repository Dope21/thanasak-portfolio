import '../styles/globals.css'
import Main from '../components/layout/main'

function MyApp({ Component, pageProps, router }) {
  return (
    <Main router={router}>
      <Component {...pageProps} />
    </Main>
  )
}

export default MyApp
