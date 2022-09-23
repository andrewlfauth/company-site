import TableData from './TableData'
import { FiCheck } from 'react-icons/fi'
import { BsDashLg } from 'react-icons/bs'

function PriceTable() {
  let check = (
    <FiCheck className='mx-auto text-2xl md:text-3xl text-accent-red' />
  )
  let dash = (
    <BsDashLg className='mx-auto text-lg md:text-2xl text-accent-red' />
  )
  return (
    <table className='w-full'>
      <thead className='z-50'>
        <tr className='bg-white z-[5] md:sticky top-14'>
          <th className='w-[200px]'></th>
          <th className='py-6 w-[200px] md:px-0 px-4'>
            <div className='flex flex-col items-center justify-center space-y-2'>
              <span className=''>Starter</span>
              <span className='text-3xl tracking-tight md:text-4xl'>$499</span>
            </div>
          </th>
          <th className='bg-neutral-100 w-[200px] px-4 md:px-0'>
            <div className='relative flex flex-col items-center justify-center space-y-2'>
              <span className='whitespace-nowrap'>SEO Complete</span>
              <span className='text-3xl tracking-tight md:text-4xl'>$899</span>
              <span className='absolute w-full p-2 text-xs font-medium tracking-wide text-white rounded-t -top-16 bg-accent-red md:text-base whitespace-nowrap'>
                Most Popular
              </span>
            </div>
          </th>
          <th className='w-[200px] px-4 md:px-0'>
            <div className='flex flex-col items-center justify-center space-y-2'>
              <span className=''>Professional</span>
              <span className='text-3xl tracking-tight md:text-4xl'>
                $1,299
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className='pr-10 text-sm tracking-tight text-left md:pr-0 whitespace-nowrap md:text-base'>
            The Essentials
          </th>
          <td></td>
          <td className='bg-neutral-100'></td>
          <td></td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Custom Design'
            tooltip='Your website will have an original design that stays true to your brand.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Mobile Responsive'
            tooltip='Mobile responsiveness ensures that your website looks great on all screen sizes and devices.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Stock Photography'
            tooltip="Beautiful imagery that speaks to your business and industry to help tell your company's story."
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='100% Ownership Rights'
            tooltip='Your website belongs to you and you alone.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Accessibility Standards'
            tooltip='These standards ensure that users with disabilities and assistive technologies can use your website.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr>
          <th className='pt-3 text-sm tracking-tight text-left md:text-base'>
            Lead Generation
          </th>
          <td></td>
          <td className='bg-neutral-100'></td>
          <td></td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Contact Form'
            tooltip='Allows site visitors to easily contact you.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Email Capturing'
            tooltip='An easy way for visitors to opt-in to your email list.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Promotional Pop-ups'
            tooltip='These forms promote an actionable response from potential customers.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr>
          <th className='pt-3 text-sm tracking-tight text-left md:text-base'>
            Special Features
          </th>
          <td></td>
          <td className='bg-neutral-100'></td>
          <td></td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Scrolling Effects'
            tooltip='Scrolling based animation can make a website feel more professional and increase user engagement.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Loading State Animations'
            tooltip='These animations indicate to the user what the website is doing such as submitting a form or loading a page.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Interactive Navigation'
            tooltip='Allows users to easily navigate your website across a variety of devices.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Social Media Integration'
            tooltip='Allows users to easily share your sites content with others via social media.'
          />
          <td>{check}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr>
          <th className='pt-3 text-sm tracking-tight text-left md:text-base'>
            SEO
          </th>
          <td></td>
          <td className='bg-neutral-100'></td>
          <td></td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='On-Page Optimization'
            tooltip='Optimized content for search engines and users to bring in relevant traffic to your website.'
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='SEO Meta Tags'
            tooltip='These codes snippets inform search engines how your website should be displayed in search results and provide search engines with important information about your site.'
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Search Engine Submission'
            tooltip='These submission inform search engines of the existance of your website pages so they can be displayed in search results.'
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='XML Sitemap'
            tooltip='Sitemaps show search engines where to locate the various pages of your site so they can easily be indexed.'
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Canonical URLs'
            tooltip="Provides search engines with a single authoritative URL for your website's pages."
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Tracking & Analysis'
            tooltip='Setting up GSC will allow you to track your websites performance in organic search results.'
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Keyword Strategy'
            tooltip='Target industry specific keywords to generate relevant traffic to your website.'
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Competitor Analysis'
            tooltip="Determines your competitors standing in the search results for your business's market."
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{check}</td>
          <td>{check}</td>
        </tr>
        <tr>
          <th className='pt-3 pr-10 text-sm tracking-tight text-left md:pr-0 whitespace-nowrap md:text-base'>
            Advanced
          </th>
          <td></td>
          <td className='bg-neutral-100'></td>
          <td></td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Blog'
            tooltip='Blogs are an effective way to generate traffic, gain exposure, and build trust with your target audience.'
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{dash}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='SEO Optimized Posts'
            tooltip='Each blog post targets relevant search terms in your industry; driving valuable traffic to your site.'
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{dash}</td>
          <td>{check}</td>
        </tr>
        <tr className='border-b'>
          <TableData
            data='Advanced Post Types'
            tooltip='Each blog post targets relevant search terms in your industry; driving valuable traffic to your site.'
          />
          <td>{dash}</td>
          <td className='bg-neutral-100'>{dash}</td>
          <td>{check}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default PriceTable
