import { Form, useTransition, useActionData } from '@remix-run/react'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { MdPhoneInTalk } from 'react-icons/md'
import { TiPen } from 'react-icons/ti'
import FlashMessage from '../shared/FlashMessage'
import useClearForm from '../../hooks/useClearForm'

function SEOForm() {
  const transition = useTransition()
  const action = useActionData()

  useClearForm('#hero-form', 2000, action)

  return (
    <Form
      id='hero-form'
      method='post'
      className='relative flex flex-col w-full px-4 py-4 bg-white rounded lg:py-6'
    >
      <span className='block mt-2 text-3xl font-bold tracking-tighter text-center md:text-4xl md:mt-4 font-poppins'>
        Request a <span className='text-accent-red'>SEO Audit</span>
      </span>
      <p className='mt-2 text-xs text-center'>
        Use this form to request an audit of your website's SEO. You will
        recieve an actionable plan to improve your sites SEO.
      </p>

      <div className='mt-4 space-y-2'>
        <div className='relative h-auto font-sans'>
          <input
            required
            type='text'
            name='name'
            placeholder='First Name'
            className='w-full py-3 pl-8 text-sm border-2 shadow outline-accent-red placeholder:text-neutral-600 lg:cursor-none bg-netral-200'
          />
          <BsPerson className='absolute text-sm -translate-y-1/2 left-3 top-1/2' />
        </div>
        <div className='relative h-auto font-sans'>
          <input
            required
            type='email'
            name='email'
            placeholder='Your Email'
            className='w-full py-3 pl-8 text-sm border-2 shadow lg:cursor-none outline-accent-red placeholder:text-neutral-600'
          />
          <HiOutlineMail className='absolute text-sm -translate-y-1/2 left-3 top-1/2' />
        </div>
        <div className='relative h-auto font-sans'>
          <input
            required
            type='tel'
            name='phone'
            placeholder='Phone Number'
            className='w-full py-3 pl-8 text-sm border-2 shadow lg:cursor-none outline-accent-red placeholder:text-neutral-600'
          />
          <MdPhoneInTalk className='absolute text-sm -translate-y-1/2 left-3 top-1/2' />
        </div>
        <div className='relative h-auto font-sans'>
          <textarea
            rows='5'
            cols='20'
            name='message'
            placeholder='Your Message (optional)'
            className='w-full py-2 pl-8 text-sm border-2 shadow lg:cursor-none outline-accent-red placeholder:text-neutral-600'
          ></textarea>
          <TiPen className='absolute left-3 top-3' />
        </div>
      </div>

      <button
        disabled={transition.submission || action?.success}
        type='submit'
        name='_action'
        value='audit'
        className='w-full py-2 mt-4 font-medium tracking-tight text-white duration-100 bg-accent-red hover:bg-opacity-95 cursor-none'
      >
        {transition.submission ? 'Submitting...' : 'Request a Site Audit'}
      </button>

      {action?.auditSent && (
        <FlashMessage
          duration={6000}
          className='absolute left-0 right-0 p-4 mx-auto my-auto rounded top-1/2'
        >
          <span className='block p-2 font-medium text-center text-white rounded bg-primary'>
            Thanks for reaching out! <br /> We will give you a call shortly.
          </span>
        </FlashMessage>
      )}
    </Form>
  )
}

export default SEOForm
