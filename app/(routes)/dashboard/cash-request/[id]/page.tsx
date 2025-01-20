import BranchDetails from '@/app/containers/cash-request/BranchDetails'
// import ContentHeader from '@/app/containers/cash-request/ContentHeader'
import NewCashRequest from '@/app/containers/cash-request/NewCashRequest'
import Navbar from '@/app/containers/control-tower/Navbar'
import Sidebar from '@/app/containers/control-tower/Sidebar'
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
		
		<BranchDetails branchId={"1"} />
    <NewCashRequest />
	</div>
  </div>
    </>
  )
}

export default page