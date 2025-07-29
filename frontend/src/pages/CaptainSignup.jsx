import React,{useState} from 'react'
import {Link} from 'react-router-dom'


function CaptainSignup() {
   const [email,setEmail]=useState('')
      const[password,setPassword]=useState('')
      const[firstName,setFirstname]=useState('')
      const[lastname,setLastname]=useState('')
      const[userdata,Setuserdata]=useState({})
  
  
  
  
      const submitHandler=(e)=>{
          e.preventDefault()
          Setuserdata({
            fullname:{
              firstName:firstName,
              lastname:lastname
  
            },
            email:email,
            password:password
  
          })
          console.log(userdata);
          
  setFirstname('')
  setLastname('')
  setEmail('')
  setPassword('')
      }
  return (
    <div>
          <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
         <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82MY-x_Hum-xMbE8Tf8T8IdweGnDfKibLvEpi-yBmPDL8gak0yM6pPBk&s" alt="" />
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} >
<h3 className='text-lg font-medium mb-2'>What's your name</h3>
<div  className='flex gap-4'>
     <input
             required
             className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border  text-lg placeholder:text-base  '
              type="text"
               placeholder='FirstName'
               value={firstName}
               onChange={(e)=>{
               setFirstname( e.target.value)
               }}
                />

                 <input
             required
             className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border  text-lg placeholder:text-base  '
              type="text"

               placeholder='LastName'
               value={lastname}
               onChange={(e)=>{
                setLastname(e.target.value)
               }}
                />
</div>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input
             required
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base  '
              type="email"
               placeholder='email@example.com'
               value={email}
               onChange={(e)=>{
                setEmail(e.target.value)
               }}
                />
            <h3 className='text-xl mb-2'>Enter password</h3>
            <input required 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base  '
             type="password"
              placeholder='enter your password'
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
               />
            <button
            className=' bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base  '
            >Login</button>
          <p className='text-center'> Already have an account?  <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </form>
       </div>

       <div>
      <p className='text-[10px] leading-tight' >
        This site is protected by reCAPTCHA and the <span className='underline'>Google
 privacy policy</span>  and  <span className='underline'>Terms Of Service apply</span>

      </p>
       </div>
    </div>
    </div>
  )
}

export default CaptainSignup