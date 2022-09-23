function TextCarousel() {
  return (
    <h2 className='text-3xl font-extrabold tracking-tight text-center text-white sm:text-4xl'>
      The sites we build <br className='sm:hidden' />
      <span className='relative inline-flex overflow-y-hidden'>
        <span className='text-transparent' aria-hidden>
          Create Conversions
        </span>
        <span className='absolute top-0 left-0 overflow-hidden text-center sm:text-left text-secondary-blue text-opacity-80 animate-rotate whitespace-nowrap'>
          <span className='block'>Generate Leads</span>
          <span className='block'>Create Conversions</span>
          <span className='block'>Increase Visibilty</span>
          <span className='block'>Generate Leads</span>
        </span>
      </span>
    </h2>
  )
}

export default TextCarousel
