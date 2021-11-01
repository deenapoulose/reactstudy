//import React from "react";
import {BrowserRouter as Router,Route} from'react-router-dom'
import { useState ,useEffect} from "react"
import Tasks  from "./compoents/Tasks";
import Header from "./compoents/header";
import AddTask from "./compoents/AddTask";
import Footer from "./compoents/Footer";
import About from "./compoents/About";
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTask]=useState( [])
  // const name="brand"
  // const x="false"

  useEffect(() => {
  
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTask(tasksFromServer)
    }

    getTasks()
  }, [])
  /* fetch task*/
  const fetchTasks= async ()=>{
    const res = await fetch("http://localhost:5000/tasks")
     const data = await res.json()
    // console.log(data)
   return data
  
  }
   // Fetch Task
   const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }
  /* add task */
  const addTask = async (task)=>{
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTask([...tasks, data])
  }
  // const addTask = (task)=>{
  // //  console.log("task",task)
  // const id =Math.floor(Math.random()*10000)+1
  // const newTask={id, ...task}
  // setTask([...tasks,newTask])

  // //console.log(id)
  // }
/* delete task */
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTask(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  /* toggle reminder */
  const toggleReminder = async (id) => {
  
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }


  // const  toggleReminder=(id)=>{
  //  // console.log(id)
  
  //  setTask(tasks.map((task)=>
  
  //    task.id === id? {...task,reminder: ! task.reminder}:task
  //  ))
  // }
  //*delete tasks */
  // const deleteTask =(id)=>{
  //   setTask(tasks.filter((task)=>
  //     task.id !== id

  //   ))
  //  // console.log("delete",id)
  // }
  return (
    <Router>
    <div className="container">
      {/* compoents with props passing
      <Header  tittle="hai"/> */}
      <Header  onAdd={()=>setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
     {/* {showAddTask  && <AddTask onAdd={addTask} />}
     { tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'No tasks'} */}
      {/* <h1>Task Sheet</h1>
      <h2>{name}</h2>
    <h3>{x?'yes':'no'}</h3> */}
     <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
            </>
          )}
        />
    <Route path='/about' component={About} />
    <Footer />
    </div>
    </Router>
  );
}
/* same as function  instead use class 
class App extends React.Component{
  render(){
    return <h1>task sheet</h1>
  }
}*/

export default App;
