import { CgSmileMouthOpen } from 'react-icons/cg'
import { contactFormAtom } from './ContactForm'
import { useAtom } from 'jotai'

function ContactButton({ showScrollNav }) {
  const [, setShowForm] = useAtom(contactFormAtom)

  return (
    <button
      className={`${
        showScrollNav
          ? 'lg:border-0 text-white lg:bg-gradient-to-b from-blue-800 to-primary'
          : 'text-white border-white'
      } items-center hidden px-4 py-2 tracking-tight duration-100 border-2 rounded md:flex group cursor-pointer lg:cursor-none`}
      onClick={() => setShowForm(true)}
    >
      Contact Us
      <CgSmileMouthOpen className='ml-4 text-2xl text-white duration-300 group-hover:scale-125' />
    </button>
  )
}

export default ContactButton
