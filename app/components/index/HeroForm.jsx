import { Form, useTransition, useActionData } from '@remix-run/react'
import { useRef } from 'react'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { MdPhoneInTalk } from 'react-icons/md'
import { TiPen } from 'react-icons/ti'
import useClearForm from '../../hooks/useClearForm'

function HeroForm() {
  const transition = useTransition()
  const action = useActionData()
  const formRef = useRef()

  const submitButtonText =
    transition?.submission?.formData.get('component') === 'HeroForm'
      ? 'Submitting...'
      : action?.HeroForm?.sent
      ? 'Sent!'
      : 'Submit'
  const disableForm =
    submitButtonText === 'Submitting...' || submitButtonText === 'Sent!'

  useClearForm(formRef.current, action?.HeroForm?.sent, 2000)

  return (
    <Form
      ref={formRef}
      method='post'
      className='flex-col hidden px-4 py-4 bg-white rounded lg:flex lg:py-6 min-w-[300px] w-[400px] relative'
    >
      <span className='text-2xl font-bold'>
        Reach Out<span className='text-accent-red'> Now!</span>
      </span>
      <p className='w-4/5 mt-2 text-xs'>
        Let's chat about your company's online needs.
      </p>

      <div className='mt-4 space-y-2'>
        <div className='relative h-auto font-sans'>
          <input
            required
            type='text'
            name='name'
            placeholder='First Name'
            className='w-full py-2 pl-8 text-sm border rounded-full lg:cursor-none outline-accent-red placeholder:text-neutral-600'
          />
          <BsPerson className='absolute text-sm -translate-y-1/2 left-3 top-1/2' />
        </div>
        <div className='relative h-auto font-sans'>
          <input
            required
            type='email'
            name='email'
            placeholder='Your Email'
            className='w-full py-2 pl-8 text-sm border rounded-full outline-accent-red placeholder:text-neutral-600 lg:cursor-none'
          />
          <HiOutlineMail className='absolute text-sm -translate-y-1/2 left-3 top-1/2' />
        </div>
        <div className='relative h-auto font-sans'>
          <input
            required
            type='tel'
            name='phone'
            placeholder='Phone Number'
            className='w-full py-2 pl-8 text-sm border rounded-full outline-accent-red placeholder:text-neutral-600 lg:cursor-none'
          />
          <MdPhoneInTalk className='absolute text-sm -translate-y-1/2 left-3 top-1/2' />
        </div>
        <div className='relative h-auto font-sans'>
          <textarea
            rows='5'
            cols='20'
            name='message'
            placeholder='Your Message (optional)'
            className='w-full py-2 pl-8 text-sm border rounded-lg outline-accent-red placeholder:text-neutral-600 lg:cursor-none'
          ></textarea>
          <TiPen className='absolute left-3 top-3' />
        </div>
      </div>

      <button
        disabled={disableForm}
        type='submit'
        name='component'
        value='HeroForm'
        className='w-full py-2 mt-4 font-medium tracking-tight text-white duration-100 rounded-md bg-accent-red hover:bg-opacity-95 cursor-none'
      >
        {submitButtonText}
      </button>
    </Form>
  )
}

export default HeroForm
