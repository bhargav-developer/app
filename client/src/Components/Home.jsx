import { useState, useEffect } from 'react'
import axios from 'axios';
import uniqid from 'uniqid';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { FaPlus } from "react-icons/fa";
import { ADD_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from '@/lib/constrations';
import { IoFilter } from "react-icons/io5";
import { data } from 'autoprefixer';

function Home() {
  const [todo, setTodo] = useState("")
  const [allTodos,setAlltodos] = useState([])
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCompleted, setShowCompleted] = useState(false)
  const [category, setCategory] = useState(undefined)
  const [categories, setCategories] = useState([
    "work",
    "personal"
  ])


  useEffect(() => {


    const getAllTodos = async () => {
      try {
        const res = await axios.get(GET_TODOS,{withCredentials: true})
        const data = await res.data
        setAlltodos(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getAllTodos()
    renderTasks()

  },[loading])

  useEffect(() => {
  renderTasks()
  }, [showCompleted])
  

  const renderTasks = () => {
    const unCompletedTasks = allTodos.filter(todo => todo.Iscompleted != true);
    if(!showCompleted){
      setTodos(unCompletedTasks)
      console.log(unCompletedTasks)
    }
    else{
      setTodos(allTodos)
      console.log(allTodos)
    }
  }


const handleKeyPress = (e) => {
  if(e.key === "Enter"){
  addTask()
  }
}






  const handleChange = (e) => {
    setTodo(e.target.value)

  }


  const deleteTask = async (id) => {
    try {
      const filterOut = todos.filter(task => {
        if (task.id !== id) {
          return task
        }
      })
      setTodos(filterOut)
      const res = await axios.post(DELETE_TODO, { id })

    }
    catch (err) {
      console.log(err)
    }
  }

  const editTask = (id) => {
    if (todo === "") {
      const filterOut1 = todos.filter(task => task.id === id)
      const filterOut2 = todos.filter(task => task.id !== id)
      setTodo(filterOut1[0].todo)
      deleteTask(id)
    }

  }
  const checkCompleted = async (id) => {

    try {
      const filterOut = todos.filter((task) => {
        if (task.id === id) {
          task.Iscompleted = !task.Iscompleted
        }
        return task
      })
      setTodos(filterOut)
      const res = await axios.post(UPDATE_TODO, { id })
      if (!res.status === 200) {
        alert("There is an error while updating the task")
      }
      renderTasks()
    } catch (error) {
      console.log(error)
    }
  }



  const addTask = async () => {

    if (category === undefined) {
      alert("please select category")
      return
    }
    if (todo !== "") {
      const task_id = uniqid()
      const data = { id: task_id, todo, category, Iscompleted: false }
      setTodos([...todos, data])
      setTodo("")
      try {
        const res = await axios.post(ADD_TODO, data)
      }
      catch (err) {
        console.log("Error is ", err)
      }
    }

  }



  return (
    <>
      <div className='bg-my-red flex justify-center'>

        <div className="container mx-6 p-6  min-h-screen m-auto bg-my-blue rounded-2xl">
          <div className="inputBox">
            <h1 className='text-center text-4xl mx-3 my-4 text-my-black font-bold '>Add Your Todo</h1>
            <div className="flex items-center  justify-center">
              <div className="flex items-center space-x-4 flex-col gap-3 sm:flex-row  p-4 w-full justify-center rounded shadow-md">
                <input onChange={handleChange}   onKeyDown={handleKeyPress} value={todo} type="text" placeholder="Enter Your Todo List" className="border w-full border-gray-300 rounded-lg ml-4 px-6 py-2 focus:outline-none " />
                <DropdownMenu className="bg-black text-white rounded-lg">
                  <DropdownMenuTrigger className='bg-my-brown w-[100%] sm:w-[20%] p-3 text-white  rounded-lg focus:outline-none '>{category ? `${category}` : "Catergory"} </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black p-2 text-white">
                    <DropdownMenuLabel onClick={() => setCategory(undefined)} ><div className="flex justify-between items-center sm:w-[100%]" >
                      Add category
                      <FaPlus />
                    </div> </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {categories.map((e) => {
                      return <div key={e}>
                        <DropdownMenuItem onClick={() => setCategory(e)} className="cursor-pointer" >{e}</DropdownMenuItem>
                      </div>
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>

                <button className="bg-my-brown rounded-lg w-[100%] sm:w-[10%]  text-white px-4 py-2  hover:bg-my-red focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={addTask}>Add</button>

              </div>
            </div>
          </div>
          <div className='flex justify-between p-3'>
            <div className='inline-flex basis-[10%] justify-around items-center'><IoFilter /> Filter</div>
            <div className='inline-flex sm:basis-[15%] justify-between items-center'>
              <input type="checkbox" onChange={() => setShowCompleted(!showCompleted)} checked={showCompleted} name="completed" id="" />
              <label htmlFor="completed" className=''>Show Completed</label>
            </div>
          </div>
          {loading ? <div className='text-4xl text-center p-5'>Loading...</div> : todos.length === 0 ? <h1 className='text-4xl text-center p-5'>No Tasks </h1> :
            <div className="container  mx-auto p-4 flex   items-start justify-center ">

              <table className="w-full border-collapse  bg-white shadow-md rounded">
                <thead>
                  <tr className="bg-my-skin  border-b">
                    <th className="p-2">Status</th>
                    <th className="p-2">Task</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Edit</th>
                    <th className="p-2">Delete</th>
                  </tr>
                </thead>
                <tbody>

                  {todos.map(task => (

                    <tr key={task.id} className="border-b ">
                      <td className="p-2 text-center">
                        <input type="checkbox" className='' checked={task.Iscompleted} onChange={() => checkCompleted(task.id)} name="" id="" />
                      </td>
                      <td className={task.Iscompleted ? "line-through text-gray-700 text-sm sm:text-2xl w-4/5 p-2 text-center" : "text-sm p-2 text-center sm:text-2xl w-4/5"}>{task.todo}</td>
                      <td className="text-purple-600 text-center">{task.category}</td>
                      <td className="p-2 text-center">
                        <button
                          className="bg-my-red text-white py-1 px-1  sm:px-3 rounded"
                          onClick={() => editTask(task.id)}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="p-2 text-center">
                        <button
                          className="bg-my-red text-white py-1 px-1 sm:px-3 rounded"
                          onClick={() => deleteTask(task.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Home
