import React, { useEffect } from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import {onAuthStateChanged } from "firebase/auth";



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store)=>store.user)

  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          //Redirect to browser page- useNavigate Hook come from REACT-ROUTER-DOM
          navigate('/browse')
       
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/')
   
        }
      
      });
      return ()=>unsuscribe;
    },[])
  const handleSignOutClicked= ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate('error')
    });
  }
  


  return (
    <div className='absolute bg-gradient-to-b from-black  z-10 w-full flex justify-between '>
    <img className='h-20 mt-4 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'/>
    { user && <div className='p-1 mt-5  flex ' >
        <img className='w-[50px] h-[50px] rounded-sm ' src='https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp'/>
        <div className='mr-4 ml-2'>
        <p className='text-white'>Hello: User</p>
        <p className='text-white font-bold cursor-pointer' onClick={handleSignOutClicked}>SignOut</p>
        </div>
        </div>}
    </div>
  )
}

export default Header