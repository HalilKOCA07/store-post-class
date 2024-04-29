import React from 'react'
import HomeStates from '../components/HomeStates'
import Codevelopers from '../components/Codevelopers'

const Home = () => {
  return (
    <div className='p-5 flex flex-col items-center'>
     <div className='text-center mt-12 w-full sm:w-10/12'>
      <h1 className='text-3xl font-bold'>Our group is hardworking and successful</h1>
      <h3 className='font-semibold mt-3 text-xl'>Our Mentor Felix</h3>
      <p className='mt-8 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt ipsum dolor sit amet, consectetur.</p>
     </div>
     <HomeStates />
     <Codevelopers />
    </div>
  )
}

export default Home
