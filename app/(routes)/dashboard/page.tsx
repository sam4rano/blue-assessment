import Container from '@/app/containers/dashboard/Container'
import Navbar from '@/app/containers/dashboard/Navbar'
import React from 'react'

const page = () => {
  return (
	<div>
		<Navbar />
		<Container />
	</div>
  )
}

export default page