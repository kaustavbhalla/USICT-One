import Pagination from '@/components/Pagination'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import React from 'react'

const TeacherList = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* topSect */}
        <div className='flex items-center justify-between'>
          <h1 className='hidden md:block text-lg font-semibold'>Faculties</h1>
          <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
            <TableSearch />
            <div className='flex items-center gap-4 self-end'>
              <button className='w-10 h-10 flex items-center justify-center rounded-full bg-yellow-custom'>
                <Image src="/filter.png" alt='' width={14} height={14} />
              </button>

              <button className='w-10 h-10 flex items-center justify-center rounded-full bg-yellow-custom'>
                <Image src="/sort.png" alt='' width={14} height={14} />
              </button>

              <button className='w-10 h-10 flex items-center justify-center rounded-full bg-yellow-custom'>
                <Image src="/plus.png" alt='' width={14} height={14} />
              </button>
            </div>
          </div>
        </div>

        {/* listSec */}
        <div></div>

        {/* paginationSect */}
          <Pagination />
    </div>
  )
}

export default TeacherList