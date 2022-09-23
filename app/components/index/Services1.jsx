import { SiMaterialdesignicons } from 'react-icons/si'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextCarousel from '~/components/index/TextCarousel'

gsap.registerPlugin(ScrollTrigger)

function Services1() {
  const dlHeadingRef = useRef()
  const dl1Ref = useRef()

  useEffect(() => {
    let dls = gsap.utils.toArray([
      dl1Ref.current,
      dl1Ref.current.nextElementSibling,
    ])

    gsap.from([dlHeadingRef.current, dlHeadingRef.current.nextElementSibling], {
      opacity: 0,
      y: 5,
      scrollTrigger: {
        trigger: dlHeadingRef.current,
        start: 'top 80%',
      },
    })
    gsap.from(dls, {
      opacity: 0,
      x: 20,
      stagger: 0.2,
      scrollTrigger: {
        trigger: dlHeadingRef.current,
        start: 'top 50%',
      },
    })
  }, [])

  return (
    <div className='py-16 bg-primary lg:py-24'>
      <div className='px-4 mx-auto overflow-x-hidden sm:px-6 lg:px-8 max-w-7xl'>
        <TextCarousel />

        <div className='mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:mt-24'>
          <img
            src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1660516039/Company/seo-drawing_imfqhr.png'
            alt=''
            className='hidden lg:block'
          />

          <div>
            <h3
              ref={dlHeadingRef}
              className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl'
            >
              Increase brand visibility and awareness
            </h3>
            <p className='mt-3 text-lg text-gray-300'>
              Get your business in front of potential customers.
            </p>
            <dl ref={dl1Ref}>
              <dt className='relative mt-10'>
                <div className='absolute p-4 rounded bg-secondary-blue w-min'>
                  <SiMaterialdesignicons className='text-xl text-white' />
                </div>
                <p className='ml-16 text-lg font-medium leading-6 text-white'>
                  Search Engine Optimized
                </p>
              </dt>
              <dd className='mt-2 ml-16 leading-6 text-gray-300'>
                All of our sites include a custom SEO strategy to increase the
                amount of relevant traffic flowing into your site.
              </dd>
            </dl>
            <dl>
              <dt className='relative mt-10'>
                <div className='absolute p-4 rounded bg-secondary-blue w-min'>
                  <SiMaterialdesignicons className='text-xl text-white' />
                </div>
                <p className='ml-16 text-lg font-medium leading-6 text-white'>
                  Appear in local search results
                </p>
              </dt>
              <dd className='mt-2 ml-16 leading-6 text-gray-300'>
                Local SEO gets your website in front of consumers in your area
                who search for the services you offer.
              </dd>
            </dl>
          </div>
          <img
            src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1660516039/Company/seo-drawing_imfqhr.png'
            alt=''
            className='w-2/3 mx-auto mt-6 lg:hidden'
          />
        </div>
      </div>
    </div>
  )
}

export default Services1
