import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo, editTodoRedux } from '../redux/slices/todoSlice';

const AddTodo = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

const data = useSelector((state)=>state.Selected)


useEffect(()=>{

  location.pathname.includes("createTodo")  ? setValue('description', "") : setValue('description', data.description || "")
  location.pathname.includes("createTodo")  ? setValue('title', "") : setValue('title', data.title || "")
  location.pathname.includes("createTodo")  ? setValue('dueDate', "") : setValue('dueDate', data.dueDate || "")


},[location.pathname])

const id = data.id
function addHandler(data){
  dispatch(addTodo({id:Date.now(),title : data.title, description:data.description,dueDate:data.dueDate,completed : false}))
navigate("/")
}

function editHandler(data){
  dispatch(editTodoRedux({id:id,title : data.title, description:data.description,dueDate:data.dueDate}))
navigate("/")
}

  return (
    <div className='w-svw h-full flex flex-col justify-start items-center gap-20'>
      <form 
      
      onSubmit={handleSubmit((data)=>location.pathname.includes("createTodo") ? 
        addHandler(data)
        : editHandler(data))}
      
      className='flex flex-col w-96 gap-7 justify-start items-center'>
     
    
   
      <input 
      placeholder='Enter Task Name'
       className='border w-2/3 h-14 p-2'
      type='text'
      {...register('title',{ required: true })} 
      />
  
    
      {errors.Title && <p>Title is required.</p>}
      <input
  
      placeholder='Enter Description'
         className='border w-2/3 h-14 p-2'
      type='text'
      {...register('description')} 
      />
      <input
      className='border w-2/3 h-14 p-2'
      type='Date'
      {...register('dueDate')} />
     
   <Button
   buttonText={`${location.pathname.includes("createTodo")?"Create Todo":" Edit Todo"}`}
   />
      </form>
    </div>
  )
}

export default AddTodo
