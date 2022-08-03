import Meta from '../meta'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <main className="min-h-screen">
      <Meta />

      <Navbar path={router.asPath} />

      <article className="max-w-3xl mx-auto pt-16 pb-4 px-4">
        {children}
      </article>

      <Footer />
    </main>
  )
}

export default Main
