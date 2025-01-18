import React from 'react'
import Sidebar from './Sidebar'

const Container = () => {
  return (
	<div className='w-full flex flex-row h-min-screen bg-color_off_white'>
    <div className='w-[270px] py-10 pr-5'>

    <Sidebar />
    </div>
    <div className='bg-black w-full'>main container</div>
  </div>
  )
}

export default Container