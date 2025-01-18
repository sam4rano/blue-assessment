import BranchDetails from '@/app/containers/cash-request/BranchDetails'
import ContentHeader from '@/app/containers/cash-request/ContentHeader'
import Navbar from '@/app/containers/dashboard/Navbar'
import Sidebar from '@/app/containers/dashboard/Sidebar'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
    <div className='w-full flex flex-row h-min-screen bg-color_off_white'>
    <div className='w-[270px] py-10 pr-5'>

    <Sidebar />
    </div>
    <div className='w-full '>
		<ContentHeader />
		<BranchDetails branchId={1} />
	</div>
  </div>
    </>
  )
}

export default page