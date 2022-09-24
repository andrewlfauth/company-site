import PageHeader from '~/components/shared/PageHeader'
import PriceTable from '../components/pricing/PriceTable'
import SEOPackageSection from '../components/pricing/SEOPackgageSection'

function PricingPage() {
  return (
    <div>
      <main className='bg-gradient-to-b from-blue-800 to-primary'>
        <PageHeader title='Pricing' body='Make the most of your budget' />
        <div className='px-4 py-10 -mt-10 md:p-12 md:pt-20 md:pb-32'>
          <div className='px-2 py-10 overflow-auto bg-white rounded md:p-12 lg:mx-24 xl:mx-32 md:overflow-visible'>
            <PriceTable />
          </div>
        </div>
      </main>
      <SEOPackageSection />
    </div>
  )
}

export default PricingPage
