import { contactFormAtom } from '~/components/navigation/ContactForm'
import { useAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CTASection() {
  const [, showContactForm] = useAtom(contactFormAtom)
  const btnRef = useRef()

  useEffect(() => {
    gsap.from(btnRef.current, {
      scale: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: btnRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <div className='bg-primary-dark'>
      <div className='flex flex-col items-center max-w-6xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8 lg:flex-row lg:justify-between'>
        <h2 className='mx-auto text-3xl font-extrabold text-center text-white lg:max-w-xl lg:text-left'>
          Supercharge your business with a{' '}
          <span className='text-accent-red'>marketing focused</span> website
        </h2>
        <button
          ref={btnRef}
          onClick={() => showContactForm(true)}
          className='w-full py-4 mt-4 text-2xl font-bold duration-100 border-4 rounded md:w-2/3 lg:w-1/3 lg:mt-0 border-secondary-blue text-secondary-blue lg:hover:bg-white border-opacity-80 lg:cursor-none lg:hover:bg-opacity-5'
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default CTASection
