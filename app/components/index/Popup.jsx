import { Form, useTransition, useActionData } from '@remix-run/react'
import useIsPopup from '../../hooks/useIsPopup'
import useClosePopupOnSuccessfulSubmission from '../../hooks/useClosePopupOnSuccessfulSubmission'
import { AiOutlineClose } from 'react-icons/ai'

function Popup({ tint }) {
  const transition = useTransition()
  const action = useActionData()
  const { showPopup, setShowPopup } = useIsPopup({ scroll: 10 }, 'popup', {
    outsideClick: '#popup',
  })
  const submitButtonText =
    transition?.submission?.formData.get('component') === 'Popup'
      ? 'Submitting'
      : action?.Popup?.sent
      ? 'Sent!'
      : 'Submit'
  const disableForm =
    submitButtonText === 'Submitting' || submitButtonText === 'Sent!'

  useClosePopupOnSuccessfulSubmission(action?.Popup?.sent, setShowPopup, 3000)

  return showPopup ? (
    <div
      className={`${
        tint ? 'bg-opacity-70 bg-black' : ''
      } fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-10`}
    >
      <div
        id='popup'
        className='relative w-[92vw] px-2 py-6 bg-white md:p-10 md:w-auto'
      >
        <button
          aria-label='close popup'
          className='absolute top-3 right-3'
          onClick={() => setShowPopup(false)}
        >
          <AiOutlineClose
            onClick={() => setShowPopup(false)}
            className='md:text-lg'
          />
        </button>

        <span className='block my-6 text-center font-merriweather text-neutral-600'>
          Discover how a website can{' '}
          <span className='font-bold'>impact your business</span>.
        </span>

        <span className='block max-w-md text-4xl font-bold leading-tight tracking-tight text-center lg:leading-tight md:text-5xl'>
          Schedule a <span className='text-blue-800'>Free</span> Consultation
          For Your Business
        </span>

        <Form method='post' className='flex items-end px-4 py-6 mt-0 md:mt-4'>
          <div className='flex flex-col w-full space-y-2 md:space-y-0 md:flex-row md:items-end'>
            <div className='flex flex-col md:w-2/3'>
              <label htmlFor='email' className='font-bold text-neutral-700'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                required
                className='p-2 border border-blue-800 rounded shadow md:p-4 outline-blue-800 bg-neutral-200'
              />
            </div>
            <button
              disabled={disableForm}
              name='component'
              value='Popup'
              type='submit'
              className='w-full py-2 md:py-0 md:w-1/3 px-4 text-xl text-white shadow shadow-blue-800 bg-blue-800 rounded md:h-[3.6rem] md:ml-2'
            >
              {submitButtonText}
            </button>
          </div>
        </Form>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
