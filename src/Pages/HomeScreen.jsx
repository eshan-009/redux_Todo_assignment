import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'


const HomeScreen = () => {
  
const dispatch = useDispatch();
const navigate = useNavigate();

function navigationHandler(){
    navigate('/createTodo')
}



  return (
    <div className='flex flex-col items-center mt-9 font-geostatic'>
      <h1 className='text-3xl font-bold'>My Tasks</h1>
      <ul className='flex justify-evenly w-full mt-11 mb-8 xl:text-2xl sm:text-lg   '>
     <Link to={`/today` }  className={`${location.pathname===`/today` ? " font-bold scale-150 text-[#2F1847]": ""}`}>Today</Link>
     <Link to={`/`} className={`${location.pathname===`/` ? "font-bold scale-150 text-[#2F1847]": ""}`}>Upcoming</Link>
     <Link to={`/completed`} className={`${location.pathname===`/completed` ? "font-bold scale-150 text-[#2F1847]": ""}`}>Completed</Link>
     <Link to={{ pathname: '/pending', state: { reload: Date.now() } }} className={`${location.pathname === `/pending` ? "font-bold scale-150 text-[#2F1847]": ""}`}>Pending</Link>
      </ul>
{
  

<Outlet></Outlet>


}
<div className='fixed bottom-10 right-10' >
<Button
clickHandler ={navigationHandler}
buttonText={'Add Todo'}
/>
</div>

    </div>
  )
}

export default HomeScreen
