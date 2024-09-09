import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import Frame90 from '../assets/Frame 90.png'

const Hero = () => {

  const navigate = useNavigate()

  return (
    <div className='max-w-[1240px] mx-auto grid grid-cols-2 mt-7'>
      <div className='black'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center px-5'>
          <h1 className='text-7xl font-bold py-3'>
            All your bills,
          </h1>
          <h1 className='text-7xl font-bold py-3'>
            purchases and
          </h1>
          <h1 className='text-7xl font-bold py-3'>
            spendings
          </h1>
          <h1 className='text-7xl font-bold py-3'>
            in
            <ReactTyped
              className='text-7xl font-bold pl-4'
              style={{
                background: 'linear-gradient(to right, #31806c 10%, #246856 30%, #0e4033 90%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
              strings={["One Place", "EcoBill"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </h1>
          <p className='md:text-2xl text-xl font-bold text-gray-500 py-4'>
            Imagine a place where every receipt, every bill, and every purchase coexists in perfect harmony.
          </p>
          <div className="flex">
            <button className='bg-[#33836f] w-[170px] h-[40px] rounded-md my-6 py-3 text-white mr-4 text-xl flex items-center justify-center' onClick={() => { navigate('/register') }}>Try It Out</button>
            <button className='w-[170px] h-[40px] rounded-md my-6 py-3 text-black border text-center border-black text-xl flex items-center justify-center' onClick={() => {
              localStorage.getItem('token') !== null ? navigate('/dashboard') : navigate('/login');
            }}>Dashboard</button>
          </div>
        </div>
      </div>
      <img className='scale-105 my-10' src={Frame90} alt="/" />
    </div>
  )
}

export default Hero
