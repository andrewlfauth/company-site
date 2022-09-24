import Card from './Card'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ProcessSection() {
  return (
    <section className='bg-white'>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <h2 className='text-3xl font-semibold leading-8 tracking-tight text-center font-inter sm:text-4xl'>
          A marketing focused approach to web design.
        </h2>

        <div className='flex flex-col items-center justify-center px-4 mt-20 lg:mt-32 md:px-10 lg:px-20 xl:px-28'>
          <div className='grid gap-14 md:gap-10 lg:gap-20 md:grid-cols-2 lg:grid-cols-3'>
            <Card
              heading='Research & Strategy'
              number='01'
              body='Before diving into the website creation I need to better understand your business. A grasp of your industry competitors and market landscape will help to inform me about how I should proceed with the design phase of your website.'
            />
            <Card
              heading='Web Development'
              number='02'
              body='Once I have an understanding of your business, I will begin to put together a wesbite tailored to your brand. The overall design of each of my sites are as unique as the clients that I work for.'
            />
            <Card
              heading='Content Creation'
              number='03'
              body='Content creation is about making your business a trusted authority in your industry/market. Having content that resonsates with your target audience will drive sales and create loyalty in consumers.'
            />
            <Card
              heading='SEO Optimization'
              number='04'
              body='What good is great content if nobody sees it? SEO optimization will put your website in position to be shown to potential customers searching for your businesses industry related keywords.'
            />
            <Card
              heading='Site Launch'
              number='05'
              body='Once the website has your approval, it is time for the site to go live! I will handle everything from domain name pointing, database installation, and procurement of a SSL certificate for your site.'
            />
            <Card
              heading='Maintence'
              number='06'
              body='I will work to ensure that your site stays up to date with changing trends in performance and optimization standards.'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
