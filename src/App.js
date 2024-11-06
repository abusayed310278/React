import {useState} from 'react'
import './App.css';



function App() {

    const [tasks,setTasks]=useState([
        {id:1,name:'record 1',completed:true},
        {id:2,name:'record 2',completed:false},
        {id:3,name:'record 3',completed:false},
    ]);

    const [show,setShow]=useState(false)

    function handleDelete(id){
        setTasks(tasks.filter(task=>task.id!==id))
    }



    return (
        <div className="App">
            <h1>Task List</h1>
            <ul>
                <button onClick={()=>setShow(!show)}>Toggle</button>
                {
                   show && tasks.map((task)=>(
                        <li key={task.id}>
                            <span>{task.id}-{task.name}</span>
                            <button onClick={()=>handleDelete(task.id)} className='delete'>Delete</button>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}


export default App;
