import {useEffect} from 'react'

export default function useClearForm(ref, trigger, delay) {
  useEffect(() => {
    if (trigger) {
      let form = ref
      if (delay) {
        let timeout = setTimeout(() => {
          Array.from(form.elements).forEach(el => {
            el.value =''
          })
        }, delay)
        return () => clearTimeout(timeout)
      } else {
        Array.from(form.elements).forEach(el => {
          el.value =''
        })
      }
    }
  }, [trigger, ref, delay])
}