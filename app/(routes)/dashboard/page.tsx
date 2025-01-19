import Container from '@/app/containers/control-tower/Container'
import Navbar from '@/app/containers/control-tower/Navbar'
import React from 'react'

const page = () => {
	// const cards = Array(5).fill("No operation actions for today");

  return (
	<div>
		<Navbar />
		<Container />
		

	</div>
  )
}

export default page