import NavLink from './NavLink'
import ContactButton from './ContactButton'
import { MdOutlineMenu } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

function NavList({
  showScrollNav,
  setShowForm,
  showMobileNav,
  setShowMobileNav,
}) {
  return (
    <ul className='flex items-center space-x-4 text-lg tracking-tight lg:space-x-12'>
      <NavLink to='/' showScrollNav={showScrollNav}>
        Home
      </NavLink>
      <NavLink to='/our-process' showScrollNav={showScrollNav}>
        Our Process
      </NavLink>
      <NavLink to='/pricing' showScrollNav={showScrollNav}>
        Pricing
      </NavLink>
      <li
        className={`${
          showScrollNav ? 'text-white' : 'text-white'
        } lg:hidden text-4xl`}
      >
        {showMobileNav ? (
          <AiOutlineClose
            className='cursor-pointer'
            onClick={() => setShowMobileNav(false)}
          />
        ) : (
          <MdOutlineMenu
            className='cursor-pointer'
            onClick={() => setShowMobileNav(true)}
          />
        )}
      </li>
      <li>
        <ContactButton
          setShowForm={setShowForm}
          showScrollNav={showScrollNav}
        />
      </li>
    </ul>
  )
}

export default NavList
