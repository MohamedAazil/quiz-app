import React from 'react'
import Display from '../Components/Display/Display'
import Maker from '../Components/Maker/Maker'

const Home = () => {
  return (
    <div className='flex flex-row'>
        <Maker/>
        <Display/>
    </div>
  )
}

export default Home