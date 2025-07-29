import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?w=120&dpr=2&h=200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fHx8MTc1MzU5NTA1N3ww&ixlib=rb-4.1.0)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400  '>
        <img className='w-16 ml-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82MY-x_Hum-xMbE8Tf8T8IdweGnDfKibLvEpi-yBmPDL8gak0yM6pPBk&s" alt="" />
        <div className='bg-white py-5 pb-7 px-4'>
<h2 className='text-3xl font-bold'>Get started with uber</h2>
<Link to="/login"  className=' flex items-center justify-center w-full bg-black text-white  py-3  mt-2 rounded'>Continue</Link>
        </div>
    </div>
  )
}

export default Home