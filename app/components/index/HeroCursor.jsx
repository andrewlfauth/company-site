import { useEffect } from 'react'

function HeroCursor() {
  const handleMove = (e) => {
    let cursorInner = document.getElementById('cursor-inner')
    let cursorOuter = document.getElementById('cursor-outer')
    let x = e.clientX
    let y = e.clientY

    cursorInner.style.left = x + 'px'
    cursorInner.style.top = y + 'px'
    cursorOuter.style.left = x + 'px'
    cursorOuter.style.top = y + 'px'
  }

  const handleMousedown = () => {
    let cursorInner = document.getElementById('cursor-inner')
    let cursorOuter = document.getElementById('cursor-outer')
    cursorInner.style.width = '.25rem'
    cursorInner.style.height = '.25rem'
    cursorOuter.style.width = '2.75rem'
    cursorOuter.style.height = '2.75rem'
  }
  const handleMouseup = () => {
    let cursorInner = document.getElementById('cursor-inner')
    let cursorOuter = document.getElementById('cursor-outer')
    cursorInner.style.width = '.75rem'
    cursorInner.style.height = '.75rem'
    cursorOuter.style.width = '2rem'
    cursorOuter.style.height = '2rem'
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleMousedown)
    window.addEventListener('mouseup', handleMouseup)
  }, [])

  return (
    <>
      <div
        style={{ transition: 'width .2s, height .2s' }}
        id='cursor-inner'
        className='fixed left-0 right-0 z-50 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-secondary-blue'
      ></div>
      <div
        id='cursor-outer'
        className='fixed z-50 w-8 h-8 duration-100 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full pointer-events-none border-accent-red'
      ></div>
    </>
  )
}

export default HeroCursor
