import { Link } from '@remix-run/react'
import { contactFormAtom } from '~/components/navigation/ContactForm'
import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function Hero() {
  const [, setShowForm] = useAtom(contactFormAtom)
  const headingRef = useRef()
  const subheadingRef = useRef()
  const btnContainerRef = useRef()

  useEffect(() => {
    gsap.to(headingRef.current, { opacity: 1, duration: 0.5, delay: 0.2 })
    gsap.from(headingRef.current, { x: 20, duration: 0.5, delay: 0.2 })
    gsap.to(subheadingRef.current, { opacity: 1, duration: 0.5, delay: 0.3 })
    gsap.from(subheadingRef.current, { x: 20, duration: 0.5, delay: 0.3 })
    gsap.to(btnContainerRef.current, { opacity: 1, duration: 0.5, delay: 0.6 })
    gsap.from(btnContainerRef.current, { y: 10, duration: 0.5, delay: 0.6 })
  }, [])

  return (
    <div className='overflow-hidden bg-gradient-to-b from-blue-800 to-primary'>
      <div className='flex flex-col md:items-center justify-between pt-44 -mt-[1px] md:pt-56 md:pb-12 lg:py-36 lg:flex-row px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-inter relative'>
        <div className='flex-grow-0 md:mr-6 lg:mr-10'>
          <h1
            ref={headingRef}
            className='max-w-3xl text-4xl font-extrabold tracking-tight text-white opacity-0 md:mx-auto lg:mx-0 sm:text-6xl xl:text-6xl md:text-center lg:text-left'
          >
            <span className='block pb-3 mt-2 sm:pb-5'>
              Web design with
              <br />{' '}
              <span className='text-secondary-blue text-opacity-80'>
                marketing in mind
              </span>
            </span>
          </h1>
          <p
            ref={subheadingRef}
            className='max-w-3xl text-base text-gray-300 opacity-0 lg:max-w-xl md:text-center lg:text-left sm:text-xl lg:text-lg xl:text-xl'
          >
            Start growing your business today with a professional website that
            works for you.
          </p>
          <div
            ref={btnContainerRef}
            className='items-center justify-center mt-6 opacity-0 md:flex lg:block'
          >
            <button
              onClick={() => setShowForm(true)}
              className='relative px-6 py-4 mr-2 font-bold border rounded bg-secondary-blue group border-secondary-blue text-primary md:mr-4 lg:mr-6'
            >
              Grow Your Business
              <div className='scale-x-[1.01] border-secondary-blue scale-y-[1.01] absolute top-0 left-0 w-full h-full duration-200 border-2 rounded-md pointer-events-none group-hover:scale-x-[1.065] group-hover:scale-y-[1.25] hidden lg:block'></div>
            </button>

            <Link
              to='/our-process'
              className='inline-block px-6 py-4 mt-2 font-bold text-white border rounded sm:mt-0 bg-primary-light hover:bg-opacity-5 hover:bg-white'
            >
              Learn More
            </Link>
          </div>
        </div>

        <img
          src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1660848718/Company/development_cmup0s.svg'
          alt='Marketing focused website design'
          className='self-end w-4/5 mt-8 md:self-auto md:w-2/3 lg:w-[500px] lg:mt-0 skew-y-6 lg:skew-y-2'
        />
      </div>
    </div>
  )
}

export default Hero
