import React, { useState } from 'react'
import Header from './Header'

export const LoginSignIn = () => {
    const [isSigninForm,setIsSigninForm] = useState(false);
    const toogleButton = ()=>{
        setIsSigninForm(!isSigninForm)
    }
  return (
    <div className='md:w-full md:h-full'>
       <Header/>
        <div className="absolute h-screen w-full">
        <img className='w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg'/>
        </div>
        <div className='absolute bg-black  w-full h-full text-white
        md:w-4/12 md:h-[650px] md:ml-[500px] md:mt-[40px] md: bg-opacity-90  md:rounded-lg'> 
        <form className='my-36 p-5 md:my-10 md:p-10 '  >
            <h1 className='text-3xl font-bold'>{isSigninForm ? 'Sign Up':'Login'}</h1>
            <input className='w-full h-14 mt-8 rounded-md bg-gray-800 text-center'  type='text' placeholder='Email'/>
           {isSigninForm  &&(<input className='w-full h-14 mt-8 rounded-md bg-gray-800 text-center'  type='text' placeholder='Name'/>)}
            <input className='w-full h-14 mt-8 rounded-md bg-gray-800 text-center' type='password' placeholder='Password'/>
            <button className='w-full h-14 mt-8 rounded-md  bg-red-500' >{isSigninForm ? 'Sign Up':'Login'}</button>
            <p className='mt-8 ml-2 cursor-pointer' onClick={toogleButton}>{isSigninForm ?'Already Have Account? Login Now':'New to Netflix? Sign up now.'}</p>
        </form>
        </div>

    </div>
  )
}
