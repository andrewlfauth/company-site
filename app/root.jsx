import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import tailwindURL from '~/styles/tailwind.css'
import Navbar from './components/navigation/Navbar'
import favicon from '~/assets/favicon.svg'
import HeroCursor from '~/components/index/HeroCursor'
import Footer from '~/components/shared/Footer'
import LeavingPagePopup from './components/shared/LeavingPagePopup'

export const meta = () => ({
  charset: 'utf-8',
  title: 'My Company',
  viewport: 'width=device-width,initial-scale=1',
  'theme-color': 'rgb(30 64 175)',
})

export const links = () => [
  { rel: 'styleheet', href: tailwindURL, type: 'text/css' },
  { rel: 'icon', href: favicon },
]

export async function action({ request }) {
  // handles LeavingPagePopup & ContactForm
  const formData = await request.formData()
  const { ...values } = Object.fromEntries(formData)

  await new Promise((res) => setTimeout(() => res(), 1000))

  if (values.component === 'LeavingPagePopup') {
    return { LeavingPagePopup: { sent: true } }
  }
  if (values.component === 'ContactForm') {
    return { ContactForm: { sent: true } }
  }

  return null
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href={tailwindURL} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Poppins:wght@200;300;400&family=Inter:wght@400;500;700;800&display=swap'
          rel='stylesheet'
        ></link>
        <Meta />
        <Links />
      </head>
      <body
        style={{ overflow: 'overlay' }}
        className='scrollbar font-poppins cursor-none'
      >
        <Navbar />
        <HeroCursor />
        <LeavingPagePopup />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
