import { Link } from '@remix-run/react'

function Footer() {
  return (
    <footer>
      <div className='px-4 pb-6 mx-auto border-t md:pb-16 md:pt-20 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='justify-between hidden pb-10 md:flex'>
          <div className='w-1/3'>
            <span className='block mb-4 text-lg tracking-wider'>ABOUT</span>
            <p className='text-sm leading-7 tracking-tight'>
              A company that helps businesses succeed online through stunning
              websites, SEO, and content strategy.
            </p>
          </div>

          <section className='flex justify-end w-2/3 md:space-x-8 lg:space-x-14'>
            <div className='flex flex-col space-y-4'>
              <span className='text-lg tracking-wider'>Company</span>
              <Link
                className='text-sm tracking-tight duration-100 lg:cursor-none hover:text-accent-red w-fit hover:underline'
                to='/'
              >
                Home
              </Link>
              <Link
                className='text-sm tracking-tight duration-100 lg:cursor-none hover:text-accent-red w-fit hover:underline'
                to='/'
              >
                Services
              </Link>
              <Link
                className='text-sm tracking-tight duration-100 lg:cursor-none hover:text-accent-red w-fit hover:underline'
                to='/'
              >
                Pricing
              </Link>
              <Link
                className='text-sm tracking-tight duration-100 lg:cursor-none hover:text-accent-red w-fit hover:underline'
                to='/'
              >
                About
              </Link>
            </div>

            <div className='flex flex-col space-y-4'>
              <span className='text-lg tracking-wider'>Services</span>
              <Link
                className='text-sm tracking-tight duration-100 lg:cursor-none hover:text-accent-red w-fit hover:underline'
                to='/'
              >
                Web Design
              </Link>
              <Link
                className='text-sm tracking-tight duration-100 lg:cursor-none hover:text-accent-red w-fit hover:underline'
                to='/'
              >
                SEO
              </Link>
              <Link
                className='text-sm tracking-tight duration-100 lg:cursor-none hover:text-accent-red w-fit hover:underline'
                to='/'
              >
                Content Strategy
              </Link>
            </div>

            <div className='flex flex-col space-y-4'>
              <span className='text-lg tracking-wider'>Contact Us</span>
              <span className='text-sm tracking-tight'>1-800-123-4567</span>
              <span className='text-sm tracking-tight'>sales@company.com</span>
            </div>
          </section>
        </div>

        <div className='flex flex-col justify-between pt-10 space-y-2 text-xs tracking-tight border-t lg:flex-row md:text-sm md:space-y-0 md:items-center md:pt-10'>
          <span>© MyCompany. All Rights Reserved</span>
          <div>
            <Link to='/'>Privacy Policy</Link>
            <span className='mx-2'>|</span>
            <Link to='/'>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
