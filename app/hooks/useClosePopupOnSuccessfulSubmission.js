import {useEffect} from 'react'

export default function useClosePopupOnSuccessfulSubmission(success, close, delay) {
  useEffect(() => {
    if (success) {
      if (delay) {
        let timeout = 
          setTimeout(() => close(false), delay)
          return () => clearTimeout(timeout)
      }
      close(false)
    }
  }, [success, close, delay])
}