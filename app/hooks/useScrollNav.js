import { useEffect, useState } from "react"

export default function useScrollNav() {
  const [showScrollNav, setShowScrollNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !showScrollNav) {
        setShowScrollNav(true)
      }
      if (window.scrollY === 0) {
        setShowScrollNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showScrollNav])

  return {showScrollNav}
}