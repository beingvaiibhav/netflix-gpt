import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'

export const LoginSignIn = () => {
    const [isSigninForm,setIsSigninForm] = useState(false);
    const [errorMessage,setErrorMessage] = useState(null);

    // const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClicked = ()=>{
    //Validate the Form
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);

      if (message) return;
      //Login/SignUp Logic
      if(!isSigninForm){
        //Login Logic
        signInWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
        
      }else{
        //Login Logic
        createUserWithEmailAndPassword(
          auth, 
          email.current.value, 
          password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          setErrorMessage('SignUp Successfully')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-"+errorMessage)
        });
      }
      
    }
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
        <form className='my-36 p-5 md:my-10 md:p-10 '  onSubmit={(e)=> e.preventDefault()}>
            <h1 className='text-3xl font-bold'>{isSigninForm ? 'Sign Up':'Login'}</h1>
            {isSigninForm  &&(<input className='w-full h-14 mt-8 rounded-md bg-gray-800 text-center'  type='text' placeholder='Name' 
            />)}
            <input className='w-full h-14 mt-8 rounded-md bg-gray-800 text-center'  type='text' placeholder='Email' 
            ref={email}/>
            <input className='w-full h-14 mt-8 rounded-md bg-gray-800 text-center' type='password' placeholder='Password' 
            ref={password}/>
            <p className='text-red-500 font-semibold mt-3 p-1'>{errorMessage}</p>
            <button className='w-full h-14 mt-8 rounded-md  bg-red-500' onClick={handleButtonClicked}>{isSigninForm ? 'Sign Up':'Login'}</button>
            <p className='mt-8 ml-2 cursor-pointer' onClick={toogleButton}>{isSigninForm ?'Already Have Account? Login Now':'New to Netflix? Sign up now.'}</p>
        </form>
        </div>

    </div>
  )
}
