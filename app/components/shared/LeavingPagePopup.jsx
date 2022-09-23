import { useEffect, useRef } from 'react'
import { Form, useTransition, useActionData } from '@remix-run/react'
import useIsPopup from '../../hooks/useIsPopup'
import useClosePopupOnSuccessfulSubmission from '../../hooks/useClosePopupOnSuccessfulSubmission'
import { gsap } from 'gsap'

function LeavingPagePopup() {
  const transition = useTransition()
  const action = useActionData()
  const popupRef = useRef()
  const overlayRef = useRef()
  const curatinRef = useRef()
  const inputRef = useRef()

  const submitButtonText =
    transition?.submission?.formData.get('component') === 'LeavingPagePopup'
      ? 'Sending...'
      : action?.Popup?.sent
      ? 'Sent!'
      : 'Yes, Please'
  const disableForm =
    submitButtonText === 'Submitting' || submitButtonText === 'Sent!'
  const { showPopup, setShowPopup } = useIsPopup(
    {
      event: {
        targetSelector: '#is-leaving-checker',
        eventType: 'mouseleave',
        callback: (e) => {
          if (e.clientY < 24) setShowPopup(true)
        },
      },
    },
    'leaving-popup',
    { outsideClick: '#leaving-popup' }
  )

  useEffect(() => {})

  useClosePopupOnSuccessfulSubmission(
    action?.LeavingPagePopup?.sent,
    setShowPopup,
    3000
  )

  // popup animation
  useEffect(() => {
    if (showPopup) {
      gsap.to(overlayRef.current, {
        x: 0,
        duration: 0.6,
      })
      gsap.from(overlayRef.current, {
        opacity: 0,
        duration: 0.6,
      })
      gsap.to(popupRef.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.3,
      })
      let tl = new gsap.timeline()
      tl.to(curatinRef.current, { width: '90vw', duration: 0.5 })
      tl.to(curatinRef.current, { x: '100%', duration: 0.5 })
      tl.to(curatinRef.current, { width: 300, duration: 0.5 }, '-=.5')
    }
  }, [showPopup])

  // input styling on blur/focus
  useEffect(() => {
    if (showPopup) {
      let input = inputRef.current
      let label = input.previousElementSibling
      input.onfocus = () => {
        label.style.fontSize = '12px'
        label.style.transform = 'translateY(-32px)'
        input.style.borderColor = 'rgb(89 223 253)'
      }
      input.onblur = (e) => {
        if (!e.target.value) {
          input.style.borderColor = 'black'
          label.style.fontSize = '16px'
          label.style.transform = 'translateY(0)'
        }
      }
    }
  }, [showPopup])

  return showPopup ? (
    <div className='hidden bg-transparent lg:block'>
      <div
        ref={overlayRef}
        id='leaving-popup-overlay'
        className='fixed top-0 z-40 w-screen h-screen -translate-x-full bg-black bg-opacity-60'
      ></div>

      <div
        ref={curatinRef}
        id='curtain'
        className='h-screen w-[60px] bg-secondary-blue fixed left-0 z-40 top-0'
      ></div>

      <div
        ref={popupRef}
        id='leaving-popup'
        className='fixed left-0 right-0 z-40 p-20 mx-auto -translate-y-1/2 bg-white opacity-0 w-min top-1/2'
      >
        <span className='text-5xl font-bold tracking-tight whitespace-nowrap'>
          Leaving so soon?
        </span>
        <span className='block my-6 font-merriweather text-neutral-600'>
          Don't forget your free{' '}
          <span className='font-bold'>Customized Quote.</span>
        </span>

        <Form method='post'>
          <div className='relative flex items-end'>
            <label
              htmlFor='email'
              className='absolute font-medium duration-300 pointer-events-none font-poppins bottom-4 text-neutral-500 left-4'
            >
              Email Address
            </label>
            <input
              ref={inputRef}
              type='email'
              name='email'
              required
              className='p-4 border-b-2 border-black outline-none font-merriweather'
            />
            {action?.LeavingPagePopup.sent ? (
              <button
                type='button'
                className='relative block px-4 py-2 ml-4 text-lg font-bold h-min whitespace-nowrap font-merriweather group'
              >
                Sent!
              </button>
            ) : (
              <button
                type='submit'
                name='component'
                value='LeavingPagePopup'
                disabled={disableForm}
                className='relative block px-4 py-2 ml-4 text-lg font-bold text-black h-min whitespace-nowrap font-merriweather group'
              >
                <div className='absolute top-0 right-0 w-8 h-full duration-200 bg-secondary-blue -z-10 group-hover:w-full group-hover:right-auto group-hover:left-0'></div>
                {submitButtonText}
              </button>
            )}
          </div>
        </Form>
      </div>
    </div>
  ) : null
}

export default LeavingPagePopup
