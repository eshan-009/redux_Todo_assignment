import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../../components/Card';

const PendingTodos = () => {
 
  const data = useSelector((state)=>state.Todos);
  const pendingData = data.filter((item)=>item.completed===false)
  return (
    <div className='w-svw h-full  flex flex-wrap justify-center items-center gap-3'>
     {
        pendingData.length>0 ?pendingData.map((item,index)=> <Card key={index} data={item}></Card>) : <p className='text-5xl'>No Data</p>
   
     }
    </div>
  )
}

export default PendingTodos
