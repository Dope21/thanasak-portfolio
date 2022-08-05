import Meta from './meta'
import Navbar from './navbar'
import Footer from './footer'

const Main = ({ children, router }) => {
  return (
    <main className="min-h-screen">
      <Meta />

      <Navbar path={router.asPath} />

      <div className="max-w-3xl mx-auto pt-16 pb-4 px-4">{children}</div>

      <Footer />
    </main>
  )
}

export default Main

export const Article = ({ children }) => {
  return <article className="pt-4 sm:p-8">{children}</article>
}
