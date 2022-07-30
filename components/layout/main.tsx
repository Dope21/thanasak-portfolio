import Meta from '../meta'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <main>
      <Meta />

      <Navbar path={router.asPath} />

      <div className="max-w-3xl mx-auto pt-16">{children}</div>

      <Footer />
    </main>
  )
}

export default Main
