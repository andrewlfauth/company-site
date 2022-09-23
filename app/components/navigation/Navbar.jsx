import { useAtom } from 'jotai'
import MobileNavList from './MobileNavList'
import ContactForm, { contactFormAtom } from './ContactForm'
import Logo from './Logo'
import LeavingBarrier from './LeavingBarrier'
import NavList from './NavList'
import useScrollNav from '../../hooks/useScrollNav'
import useMobileNav from '../../hooks/useMobileNav'

function Navbar() {
  const [, setShowForm] = useAtom(contactFormAtom)
  const { showScrollNav } = useScrollNav()
  const { showMobileNav, setShowMobileNav } = useMobileNav()

  return (
    <div className='absolute z-10 w-screen'>
      <LeavingBarrier />

      <div
        className={`${showScrollNav ? '' : 'hidden'} h-[4.75rem] bg-blue-800 `}
      ></div>

      <div
        className={`${
          showScrollNav
            ? 'bg-blue-800 lg:bg-white fixed top-0 left-0 right-0 shadow'
            : 'bg-transparent'
        }`}
      >
        <nav
          id='navbar'
          className={`${
            showScrollNav ? 'py-4 lg:py-2' : 'bg-transparent py-4'
          } flex items-end md:items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mont font-poppins z-50`}
        >
          <Logo />
          <NavList
            setShowForm={setShowForm}
            setShowMobileNav={setShowMobileNav}
            showMobileNav={showMobileNav}
            showScrollNav={showScrollNav}
          />

          <ContactForm />

          <MobileNavList
            open={showMobileNav}
            close={() => setShowMobileNav(false)}
          />
        </nav>
      </div>
    </div>
  )
}

export default Navbar
