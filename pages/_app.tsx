import '../styles/globals.css'
import Layout from '../components/layout/main'
import { AnimatePresence } from 'framer-motion'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Layout router={router}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
