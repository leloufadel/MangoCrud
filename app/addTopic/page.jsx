import React from 'react'

export default function page() {
  return (
    <form className='flex flex-col gap-3'>
      <input type='text' placeholder=' AddTitle' className=' border border-slate-300 px-8 py-2' />
      <input type='text' placeholder=' Add Descriptions' className=' border border-slate-300 px-8 py-2' />
      <button className='bg-green-500 text-white font-bold px-6 py-3 w-fit'> Add Topic </button>
      
    </form>
  )
}
