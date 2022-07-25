import Meta from '../meta'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
  return (
    <main>
      <Meta />

      <Navbar path={router.asPath} />

      <div className="max-w-3xl mx-auto pt-16">{children}</div>
    </main>
  )
}

export default Main
