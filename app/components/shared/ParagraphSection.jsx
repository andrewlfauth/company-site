function ParagraphSection({ title, body, children }) {
  return (
    <section className='py-12 md:py-20 p-section'>
      {title && <h2 className='subheading xl:px-20'>{title}</h2>}
      {children}
      <div className='gap-10 py-10 text-sm leading-6 md:columns-2 lg:leading-7 text-neutral-500'>
        {body.map((p, i) => (
          <p key={i} className='mb-4'>
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}

export default ParagraphSection
