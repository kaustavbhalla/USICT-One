import React from 'react'

const Pagination = () => {
  return (
    <div className='p-4 flex items-center justify-between text-gray-500'>
        <button className='py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300 hover:cursor-pointer'>Prev</button>
    </div>
  )
}

export default Pagination