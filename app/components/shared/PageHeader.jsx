import { useEffect } from 'react'
import { gsap } from 'gsap'

function PageHeader({ title, body, bg }) {
  useEffect(() => {
    gsap.from('#header-title', { x: -20 })
    gsap.to('#header-title', { opacity: 1 })
    gsap.from('#header-body', { y: 5, opacity: 0, delay: 0.2 })
  }, [])

  return (
    <header
      className={
        bg ? 'bg-gradient-to-b from-blue-800 to-primary' : 'bg-transparent'
      }
    >
      <div className='px-4 py-8 pt-32 mx-auto text-white sm:px-6 lg:px-6 max-w-7xl md:pt-44 font-inter'>
        <h2>
          <span
            id='header-title'
            className='block text-4xl font-bold tracking-tight opacity-0 lg:pb-4 sm:text-5xl lg:text-6xl'
          >
            {title}
          </span>
          <span
            id='header-body'
            className='block pb-4 text-lg font-light tracking-tight text-gray-300 md:font-medium lg:w-4/5 lg:text-2xl lg:pb-8'
          >
            {body}
          </span>
        </h2>
      </div>
    </header>
  )
}

export default PageHeader
