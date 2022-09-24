import { useEffect, useRef, useCallback } from 'react'

export default function useCustomCursor() {
  const innerRef = useRef()
  const outerRef = useRef()

  const handleMouseMove = useCallback((e) => {
    let x = e.clientX
    let y = e.clientY

    innerRef.current.style.left = x + 'px'
    innerRef.current.style.top = y + 'px'
    outerRef.current.style.left = x + 'px'
    outerRef.current.style.top = y + 'px'
  }, [])

  const handleMousedown = useCallback(() => {
    innerRef.current.style.width = '.25rem'
    innerRef.current.style.height = '.25rem'
    outerRef.current.style.width = '2.75rem'
    outerRef.current.style.height = '2.75rem'
  }, [])

  const handleMouseup = useCallback(() => {
    innerRef.current.style.width = '.75rem'
    innerRef.current.style.height = '.75rem'
    outerRef.current.style.width = '2rem'
    outerRef.current.style.height = '2rem'
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMousedown)
    window.addEventListener('mouseup', handleMouseup)
  }, [handleMousedown, handleMouseMove, handleMouseup])

  return { innerRef, outerRef }
}
