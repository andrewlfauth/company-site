import { useFetcher } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import useClearForm from '../../hooks/useClearForm'
import { atom, useAtom } from 'jotai'

export const contactFormAtom = atom(false)

function ContactForm() {
  const [open, setOpen] = useAtom(contactFormAtom)

  const fetcher = useFetcher()
  const formRef = useRef()

  const submitButtonText =
    fetcher?.submission?.formData.get('component') === 'ContactForm'
      ? 'Submitting...'
      : fetcher?.data?.ContactForm?.sent
      ? 'Sent!'
      : 'Submit'

  const disableForm =
    submitButtonText === 'Submitting...' || submitButtonText === 'Sent!'

  useClearForm(formRef.current, fetcher?.data?.ContactForm?.sent, 1000)

  // close on Escape
  useEffect(() => {
    if (open) {
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          setOpen(false)
        }
      }
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [open, setOpen])

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          id='form-overlay'
          className='fixed top-0 left-0 z-20 w-screen h-screen overflow-x-hidden bg-black bg-opacity-40'
        ></div>
      )}
      <fetcher.Form
        method='post'
        ref={formRef}
        className={`${
          open ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 h-screen px-6 py-20 duration-500 bg-white w-full right-0 md:w-[500px] z-50`}
      >
        <button
          type='button'
          aria-label='close contact form'
          onClick={() => setOpen(false)}
          className='absolute p-0 text-xl font-bold top-4 right-4'
        >
          <AiOutlineClose />
        </button>

        <span className='text-6xl font-bold tracking-tight'>Let's chat</span>
        <p className='pt-6 tracking-tight text-gray-600 pb-14'>
          Use this form to contact us.
          <br /> Or feel free to reach out via phone or email.
        </p>

        <div className='space-y-6'>
          <div className='flex justify-between w-full space-x-4 font-sans'>
            <div className='relative w-1/2'>
              <input
                required
                type='text'
                placeholder=' '
                name='name'
                className='w-full p-2 font-medium border-b border-black outline-none lg:cursor-none focus-within:border-blue-800 focus-within:border-b-2'
              />
              <label
                htmlFor='name'
                className='absolute left-0 duration-300 pointer-events-none'
              >
                Name
              </label>
            </div>
            <div className='relative w-1/2'>
              <input
                required
                type='text'
                placeholder=' '
                name='company'
                className='w-full p-2 font-medium border-b border-black outline-none lg:cursor-none focus-within:border-blue-800 focus-within:border-b-2'
              />
              <label
                htmlFor='company'
                className='absolute left-0 duration-300 pointer-events-none'
              >
                Company
              </label>
            </div>
          </div>

          <div className='flex justify-between w-full space-x-4 font-sans'>
            <div className='relative w-1/2'>
              <input
                required
                type='email'
                placeholder=' '
                name='email'
                className='w-full p-2 font-medium border-b border-black outline-none lg:cursor-none focus-within:border-blue-800 focus-within:border-b-2'
              />
              <label
                htmlFor='email'
                className='absolute left-0 duration-300 pointer-events-none'
              >
                Email
              </label>
            </div>
            <div className='relative w-1/2'>
              <input
                required
                type='tel'
                placeholder=' '
                name='phone'
                className='w-full p-2 font-medium border-b border-black outline-none lg:cursor-none focus-within:border-blue-800 focus-within:border-b-2'
              />
              <label
                htmlFor='phone'
                className='absolute left-0 duration-300 pointer-events-none'
              >
                Phone Number
              </label>
            </div>
          </div>

          <div className='relative font-sans'>
            <textarea
              rows='5'
              cols='20'
              name='message'
              aria-label='your message'
              placeholder=' '
              className='w-full p-2 font-medium border-b border-black outline-none focus-within:border-blue-800 focus-within:border-b-2 lg:cursor-none'
            />
            <label
              htmlFor='message'
              className='absolute left-0 duration-300 pointer-events-none'
            >
              Your Message (optional)
            </label>
          </div>
          <input type='hidden' name='component' value='ContactForm' />
          <button
            disabled={disableForm}
            type='submit'
            className='w-full py-4 mt-4 text-xl font-medium tracking-tight text-white duration-100 rounded-md bg-gradient-to-br from-blue-800 to-primary cursor-none'
          >
            {submitButtonText}
          </button>
          <div className='mt-4 font-bold tracking-tight'>
            1-800-123-4567
            <br />
            sales@mycompany.com
          </div>
        </div>
      </fetcher.Form>
    </>
  )
}

export default ContactForm
