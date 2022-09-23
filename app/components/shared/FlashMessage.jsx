import { useEffect, useState } from 'react'

function FlashMessage({ children, duration, className }) {
  const [showComponent, setShowComponent] = useState(true)

  useEffect(() => {
    let timeout = setTimeout(() => setShowComponent(false), duration)
    return () => clearTimeout(timeout)
  }, [duration])

  return showComponent ? <div className={className}>{children}</div> : ''
}

export default FlashMessage
