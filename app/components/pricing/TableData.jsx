function TableData({ data, tooltip }) {
  return (
    <td className='py-2 text-sm font-light tracking-tighter text-neutral-500'>
      <div className='relative group w-min'>
        <span className='flex items-center text-xs md:text-sm whitespace-nowrap'>
          {data}
        </span>
        <div className='absolute bottom-0 flex-col hidden mb-6 group-hover:flex w-[300px] px-2 py-3 bg-primary text-white rounded tracking-tight pointer-events-none'>
          <span className='block mb-2 font-bold'>{data}</span>
          <span className='relative z-10 text-xs leading-none whitespace-no-wrap rounded shadow-lg lg:leading-4'>
            {tooltip}
          </span>
          <div className='absolute self-start w-3 h-3 ml-2 rotate-45 bg-primary -bottom-1'></div>
        </div>
      </div>
    </td>
  )
}

export default TableData
