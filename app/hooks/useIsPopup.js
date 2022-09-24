import { useEffect, useState } from 'react'

export default function useIsPopup(trigger, sessionId, closeOptions) {
  const [showPopup, setShowPopup] = useState(false)

  // Controls when popup renders
  useEffect(() => {
    if (trigger.delay && !sessionStorage.getItem(sessionId)) {
      let t1 = setTimeout(() => setShowPopup(true), trigger.delay)
      return () => clearTimeout(t1)
    }
    if (trigger.scroll && !sessionStorage.getItem(sessionId)) {
      const handleScroll = () =>
        window.scrollY > trigger.scroll && !sessionStorage.getItem(sessionId)
          ? setShowPopup(true)
          : null

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

    if (trigger.event && !sessionStorage.getItem(sessionId)) {
      let target = document.querySelector(trigger?.event?.targetSelector)
      const callback = trigger.event.callback

      target.addEventListener(trigger.event.eventType, callback)

      return () => target.removeEventListener(trigger.event.eventType, callback)
    }
  }, [trigger, setShowPopup, sessionId])

  // Handle session storage
  useEffect(() => {
    if (showPopup && !sessionStorage.getItem(sessionId))
      sessionStorage.setItem(sessionId, true)
  }, [showPopup, sessionId])

  // Close options
  useEffect(() => {
    if (closeOptions?.outsideClick) {
      if (showPopup) {
        let popupElement = document.querySelector(closeOptions?.outsideClick)
        let handleOutsideClick = (e) => {
          if (!popupElement.contains(e.target)) {
            setShowPopup(false)
          }
        }

        document.addEventListener('click', handleOutsideClick)
        return () => document.removeEventListener('click', handleOutsideClick)
      }
    }
  }, [closeOptions, showPopup])

  return { showPopup, setShowPopup }
}
