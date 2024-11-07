import "./AddTask.css"
import {useState} from "react";

export const AddTask=()=>{

    const [taskValue,setTaskValue]=useState("")

    const handleChange=(event)=>{
        // console.log(event.target.value)
        setTaskValue(event.target.value)
    }

    return(
        <section className="addtask">
            <form action="">
                {/*<label htmlFor="task">Task Name</label>*/}
                <input onChange={handleChange} type="text" name="task" id="task" placeholder="Task Name" autoComplete="off"/>
                <button type="submit">Add Task</button>
            </form>
                <p>{taskValue}</p>
        </section>
    )
}