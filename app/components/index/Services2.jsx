import { SiMaterialdesignicons } from 'react-icons/si'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Services2() {
  const trigger1Ref = useRef()
  const trigger2Ref = useRef()
  const dl1Ref = useRef()
  const dl2Ref = useRef()
  const dl2aRef = useRef()

  useEffect(() => {
    let dls1 = gsap.utils.toArray([
      dl1Ref.current,
      dl1Ref.current.nextElementSibling,
    ])

    gsap.from(dls1, {
      opacity: 0,
      x: -20,
      stagger: 0.2,
      scrollTrigger: {
        trigger: trigger1Ref.current,
        start: 'top 50%',
      },
    })

    gsap.from([dl2Ref.current, dl2aRef.current], {
      opacity: 0,
      x: 20,
      stagger: 0.2,
      delay: 0.3,
      scrollTrigger: {
        trigger: trigger2Ref.current,
        start: 'top 50%',
      },
    })
  }, [])

  return (
    <div className='relative bg-primary'>
      <div className='px-4 mx-auto overflow-hidden sm:px-6 lg:px-8 max-w-7xl'>
        <div className='md:py-12 lg:flex lg:items-center lg:py-24 lg:justify-between'>
          <div className='lg:max-w-xl lg:mr-20'>
            <h3
              ref={trigger1Ref}
              className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl'
            >
              Generate leads for your business
            </h3>
            <p className='mt-3 text-lg text-gray-300'>
              Get new leads delivered driectly to your inbox.
            </p>
            <dl ref={dl1Ref}>
              <dt className='relative mt-10'>
                <div className='absolute p-4 rounded bg-secondary-blue w-min'>
                  <SiMaterialdesignicons className='text-xl text-white' />
                </div>
                <p className='ml-16 text-lg font-medium leading-6 text-white'>
                  Promotion Strategy
                </p>
              </dt>
              <dd className='mt-2 ml-16 leading-6 text-gray-300'>
                Our sites include a custom promotion strategy that showcases
                your services and inspire visitors to take a desired action on
                your website.
              </dd>
            </dl>
            <dl>
              <dt className='relative mt-10'>
                <div className='absolute p-4 rounded bg-secondary-blue w-min'>
                  <SiMaterialdesignicons className='text-xl text-white' />
                </div>
                <p className='ml-16 text-lg font-medium leading-6 text-white'>
                  Grow your email list
                </p>
              </dt>
              <dd className='mt-2 ml-16 leading-6 text-gray-300'>
                Get consumer information sent directly to your inbox when they
                submit a form on your site.
              </dd>
            </dl>
          </div>
          <img
            src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1660516288/Company/promotion_2_rvoaaa.png'
            alt=''
            className='w-2/3 pr-2 mx-auto mt-10 lg:pr-0 lg:w-auto lg:mt-0 lg:mx-0 lg:mr-12'
          />
        </div>

        <div className='py-12 lg:grid lg:grid-cols-2 lg:items-center lg:py-24'>
          <img
            src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1660600166/Company/customer-conversion_exoqco.png'
            alt=''
            className='hidden lg:block'
          />

          <div>
            <h3
              ref={trigger2Ref}
              className='mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:mt-0'
            >
              Convert visitors into customers
            </h3>
            <p className='mt-3 text-lg text-gray-300'>
              Get more customers purchasing your products / services.
            </p>
            <dl ref={dl2Ref}>
              <dt className='relative mt-10'>
                <div className='absolute p-4 rounded bg-secondary-blue w-min'>
                  <SiMaterialdesignicons className='text-xl text-white' />
                </div>
                <p className='ml-16 text-lg font-medium leading-6 text-white'>
                  Content strategy
                </p>
              </dt>
              <dd className='mt-2 ml-16 leading-6 text-gray-300'>
                Our sites include a custom content strategy that speaks to your
                target audiences needs and interests.
              </dd>
            </dl>
            <dl ref={dl2aRef}>
              <dt className='relative mt-10'>
                <div className='absolute p-4 rounded bg-secondary-blue w-min'>
                  <SiMaterialdesignicons className='text-xl text-white' />
                </div>
                <p className='ml-16 text-lg font-medium leading-6 text-white'>
                  Stand out in your industy
                </p>
              </dt>
              <dd className='mt-2 ml-16 leading-6 text-gray-300'>
                By demonstrating the value that your business provides your site
                will create conversions.
              </dd>
            </dl>
          </div>
          <img
            src='https://res.cloudinary.com/dpnkrz8c8/image/upload/v1660600166/Company/customer-conversion_exoqco.png'
            alt=''
            className='w-2/3 mx-auto mt-6 lg:hidden'
          />
        </div>
      </div>
    </div>
  )
}

export default Services2
