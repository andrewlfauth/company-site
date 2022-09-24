import { Link, useLocation } from '@remix-run/react'

function NavLink({ children, to, showScrollNav }) {
  const activePath = useLocation().pathname

  return (
    <li className='hidden lg:block'>
      <Link
        to={to}
        className={`${
          showScrollNav
            ? 'text-primary after:bg-primary font-semibold'
            : 'text-white after:bg-white font-medium'
        } ${
          to === activePath ? 'after:scale-x-100' : 'after:scale-x-0'
        } cursor-none relative text-lg after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full hover:after:scale-x-100 after:duration-200 after:origin-bottom-left`}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavLink
