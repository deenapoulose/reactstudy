import Task from "./Task"
// const tasks =[
//     {
//         id:1,
//         text:'doctor appoinment',
//         day:44,
//         reminder:"true"
//     },
//     {
//         id:2,
//         text:'appoinment',
//         day:45,
//         reminder:"true"
//     },
//     {
//         id:3,
//         text:'doctor',
//         day:94,
//         reminder:"false"
//     },
    
// ]
     
      const Tasks = ({tasks,onDelete,onToggle}) => {
    // const [tasks,setTask]=useState(
    //     [
    //             {
    //                 id:1,
    //                 text:'doctor appoinment',
    //                 day:44,
    //                 reminder:"true"
    //             },
    //             {
    //                 id:2,
    //                 text:'appoinment',
    //                 day:45,
    //                 reminder:"true"
    //             },
    //             {
    //                 id:3,
    //                 text:'doctor',
    //                 day:94,
    //                 reminder:"false"
    //             },
                
    //         ]
    // )

    return (
      
        <div>
            {
                tasks.map((task,index)=>(<Task key={index} task={task} onDelete={onDelete}  onToggle={onToggle} />))
            }
{/*             
           {
               tasks.map((task)=>( <h3 key={task.id}>{task.text}</h3>))
           }  */}

        </div>
    )
}

export default Tasks
