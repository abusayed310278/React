import {useState} from "react";
import {TaskCard} from './TaskCard'

export const TaskList=(props)=>{
    const [tasks,setTasks]=useState([
        {id:1,name:'record 1',completed:true},
        {id:2,name:'record 2',completed:false},
        {id:3,name:'record 3',completed:false},
    ]);

    const [show,setShow]=useState(false)

    function handleDelete(id){
        setTasks(tasks.filter(task=>task.id!==id))
    }

    return(
        <div className="app">
            <h1>Task List {props.title}</h1>
            <ul>
                <button onClick={()=>setShow(!show)}>Toggle</button>
                {
                    show && tasks.map((task)=>(
                        <TaskCard task={task} handleDelete={handleDelete}/>
                    ))
                }

            </ul>

        </div>

    )

}

