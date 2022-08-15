import { MainBtn } from '../components/button'
import { AiOutlineHome } from 'react-icons/ai'

const NotFound = () => {
  return (
    <div>
      <p className="sub-text-color text-center text-lg px-4 py-3 rounded-lg relative border-2">
        Sorry, the page you&apos;re looking for was not found.
      </p>
      <div className="text-center my-4">
        <MainBtn href="/">
          <AiOutlineHome size={18} />
          Back to Home
        </MainBtn>
      </div>
    </div>
  )
}

export default NotFound
