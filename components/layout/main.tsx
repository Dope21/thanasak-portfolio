import Footer from '../footer'
import Meta from '../meta'
import Navbar from '../navbar'

const Main = ({ children }) => {
  return (
    <main className="max-w-3xl mx-auto">
      <Meta />

      <Navbar />

      <div>{children}</div>

      <Footer />
    </main>
  )
}

export default Main
