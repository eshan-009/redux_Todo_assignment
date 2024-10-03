
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import HomeScreen from './Pages/HomeScreen'
import TodayTodos from './Pages/Todos/TodoyTodos'
import { Route, Routes } from 'react-router-dom'
import UpcomingTodos from './Pages/Todos/UpcomingTodos'
import CompletedTodos from './Pages/Todos/CompletedTodos'
import PendingTodos from './Pages/Todos/PendingTodos'
import { useEffect } from 'react'
import AddTodo from './Pages/AddTodo'
import Loader from './components/Loader'
function App() {

const loaderStatus = useSelector((state)=>state.loader)
  return (
   <>
 {
   loaderStatus && <Loader/>
 }
   <Routes>
  

<Route path='/' 
element={
   <HomeScreen>
   </HomeScreen>}>
   <Route path='' element={<UpcomingTodos></UpcomingTodos>}></Route>
<Route path='/today' element={<TodayTodos></TodayTodos>}></Route>

<Route path='/completed' element={<CompletedTodos></CompletedTodos>}></Route>
<Route path='/pending' element={<PendingTodos></PendingTodos>}></Route>

<Route path='/createTodo' element={<AddTodo></AddTodo>}></Route>
<Route path='/editTodo' element={<AddTodo></AddTodo>}></Route>
</Route>




   </Routes>


   </>
 
  )
}

export default App
