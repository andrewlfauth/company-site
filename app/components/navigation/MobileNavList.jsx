import { Link } from '@remix-run/react'
import { useAtom } from 'jotai'
import { AiOutlineClose } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { contactFormAtom } from './ContactForm'

function MobileNavList({ open, close }) {
  const [, setShowForm] = useAtom(contactFormAtom)

  return (
    <>
      {open && (
        <div
          onClick={close}
          id='mobile-nave-overlay'
          className='fixed top-0 left-0 z-10 w-screen h-screen overflow-x-hidden bg-black bg-opacity-40'
        ></div>
      )}

      <div
        className={`${
          open ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 bg-gradient-to-b from-blue-800 to-primary h-screen px-6 py-20 duration-500 text-white w-full md:w-[400px] z-10 lg:hidden`}
      >
        <ul className='space-y-2 text-2xl'>
          <AiOutlineClose
            aria-label='close navigation'
            className='absolute text-3xl text-white top-8 right-8'
            onClick={close}
          />
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/our-process' className='pb-10'>
              Our Process
            </Link>
          </li>
          <li>
            <Link to='/pricing' className='pb-10'>
              Pricing
            </Link>
          </li>
        </ul>

        <div className='py-4 mt-10 text-lg text-white border-t'>
          <span className='flex items-center'>
            <BiPhoneCall className='mr-2 text-xl text-secondary-blue' />{' '}
            1-800-123-4567
          </span>
          <span>sales@mycompany.com</span>
          <button
            className='flex items-center justify-center w-full px-4 py-2 mt-6 tracking-tight text-center border-4 border-white rounded'
            onClick={() => setShowForm(true)}
          >
            Contact Us
            <CgSmileMouthOpen className='ml-4 text-xl' />
          </button>
        </div>
      </div>
    </>
  )
}

export default MobileNavList
