import Meta from '../meta'
import Navbar from '../navbar'
import Footer from '../footer'

const Layout = ({ children, router }) => {
  return (
    <main className="min-h-screen">
      <Meta />

      <Navbar path={router.asPath} />

      <div className="max-w-3xl mx-auto pt-16 pb-4 px-4">{children}</div>

      <Footer />
    </main>
  )
}

export default Layout
