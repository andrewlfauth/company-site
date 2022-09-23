import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function TechSection() {
  const techLogosRef = useRef()
  const q = gsap.utils.selector(techLogosRef)

  useEffect(() => {
    gsap.from(q('.tech-logo'), {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: '.tech-logo',
    })
  }, [q])

  return (
    <section className='py-16 mt-16 bg-primary p-section'>
      <span className='block text-2xl font-bold text-center text-white md:text-3xl lg:text-4xl lg:leading-tight'>
        Cutting Edge <span className='text-secondary-blue'>Technology</span>
      </span>
      <p className='max-w-lg mx-auto mt-4 text-sm leading-7 tracking-tight text-center text-white text-opacity-80 md:text-base'>
        We use the latest technology to give your website performance boosts and
        provide a better experience for the user.
      </p>

      <div
        ref={techLogosRef}
        className='flex items-center mt-10 justify-evenly xl:mx-32'
      >
        <img
          loading='lazy'
          src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1657652007/Company/reactjs_rfbwge.svg'
          alt='React Javascript library logo'
          className='h-auto w-11 md:w-20 tech-logo'
        />
        <img
          loading='lazy'
          src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1657661960/Company/mongodb_sdeaw7.svg'
          alt='Greensock animation library logo'
          className='w-10 h-auto ml-2 md:w-16 tech-logo md:ml-0'
        />
        <img
          loading='lazy'
          src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1660854388/Company/800x800_-_Glowing-removebg-preview_pjfuzh.png'
          alt='Remix JS framework logo'
          className='h-auto w-7 md:w-24 tech-logo'
        />
        <img
          loading='lazy'
          src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1657653729/Company/tailwind_m7qfok.svg'
          alt='Tailwindcss logo'
          className='w-16 h-auto md:w-28 tech-logo'
        />
        <img
          loading='lazy'
          src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1657653514/Company/netlify_w3fkgv.svg'
          alt='Netlify logo'
          className='h-auto w-11 md:w-20 tech-logo'
        />
        <img
          loading='lazy'
          src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1657653601/Company/gsap-greensock_ogdebn.svg'
          alt='Greensock animation library logo'
          className='w-10 h-auto md:w-20 tech-logo'
        />
      </div>
    </section>
  )
}

export default TechSection
