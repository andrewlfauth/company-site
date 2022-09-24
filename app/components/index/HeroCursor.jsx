import useCustomCursor from '../../hooks/useCustomCursor'

function HeroCursor() {
  const { innerRef, outerRef } = useCustomCursor()

  return (
    <>
      <div
        ref={innerRef}
        style={{ transition: 'width .2s, height .2s' }}
        className='fixed left-0 right-0 z-50 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-secondary-blue'
      ></div>
      <div
        ref={outerRef}
        className='fixed z-50 w-8 h-8 duration-100 -translate-x-1/2 -translate-y-1/2 border-2 rounded-full pointer-events-none border-accent-red'
      ></div>
    </>
  )
}

export default HeroCursor
