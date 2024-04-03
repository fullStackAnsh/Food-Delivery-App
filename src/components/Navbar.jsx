import React from 'react'

function Navbar() {
  return (
    <>
    <div id="navbar" className='w-full h-28  flex p-4 justify-between items-center'>
       <div id='logo' className='h-full'><img className='h-full rounded-full transition-all 'src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="logo" /></div>
       <div id='items' className='flex justify-center items-center '><ul className='text-slate-500 flex gap-x-20 text-2xl font-bold list-none '><li className=' hover:text-slate-600 hover:text-3xl transition-all'>Home</li><li className=' hover:text-slate-600 hover:text-3xl transition-all'>CART</li></ul></div>
    </div>
    </>
  )
}

export default Navbar