export const TaskCard=(props)=>{

    return(
        <li key={props.task.id}>
            <span>{props.task.id}-{props.task.name}</span>
            <button onClick={()=>props.handleDelete(props.task.id)} className='delete'>Delete</button>
        </li>
    )
}