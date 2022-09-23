import {useState, useEffect} from 'react'
import { useTransition } from '@remix-run/react'

export default function useMobileNav() {
  const transition = useTransition()
  const [showMobileNav, setShowMobileNav] = useState(false)
  
  useEffect(() => {
    if (transition.state === 'loading') setShowMobileNav(false)
  }, [transition])

  return {showMobileNav, setShowMobileNav}
}