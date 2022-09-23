import Hero from '~/components/index/Hero'
import Services1 from '../components/index/Services1'
import Services2 from '../components/index/Services2'
import Popup from '../components/index/Popup'
import CTASection from '../components/index/CTASection'

export async function action({ request }) {
  // handle HeroForm && Popup
  const formData = await request.formData()
  const { ...values } = Object.fromEntries(formData)

  await new Promise((res) => setTimeout(() => res(), 1000))

  if (values.component === 'HeroForm') {
    return { HeroForm: { sent: true } }
  }
  if (values.component === 'Popup') {
    return { Popup: { sent: true } }
  }

  return null
}

export default function Index() {
  return (
    <main className='scrollbar font-poppins bg-primary'>
      <Hero />
      <Services1 />
      <Services2 />
      <CTASection />
      <Popup tint={true} />
    </main>
  )
}
