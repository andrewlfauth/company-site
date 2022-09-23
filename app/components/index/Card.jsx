function Card({ heading, body, number }) {
  return (
    <div className='relative'>
      <h3 className='mb-2 text-2xl tracking-tight whitespace-nowrap'>
        {heading}
      </h3>
      <span className='absolute font-bold tracking-tighter text-7xl opacity-10 -top-8 -left-6 text-primary'>
        {number}
      </span>
      <p className='text-sm leading-6 tracking-tight md:leading-6 lg:leading-7 md:text-sm text-neutral-500'>
        {body}
      </p>
    </div>
  )
}

export default Card
