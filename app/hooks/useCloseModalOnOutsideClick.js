// Closes a modal when click outside of modal
import {useEffect} from 'react'

export default function useCloseModalOnOutsideClick(ref, open, stateFn) {
  // el = the modal that will close
  // open = the state of when the modal is open
  // stateFn = the fn that sets the modal open state

  useEffect(() => {
    if (open) {
      let element = ref
      let fn = (e) => !element.contains(e.target) ?
        stateFn(false) : null

      document.addEventListener('click', fn)
      return () => document.removeEventListener('click', fn)
    }
  }, [ref, open, stateFn])
}