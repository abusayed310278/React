import {Header} from "./components/Header"
import {Footer} from "./components/Footer"
import {useState} from 'react'
import './App.css';


function App() {


    const [count,setCount]=useState(0)


    function handleAdd() {
        // setCount(count+1)
        // setCount(count+1)
        // setCount(count+1)

        setCount(count=>count+1)
        setCount(count=>count+1)
        setCount(count=>count+1)
    }

    function handleSub() {
        setCount(count-1)
    }

    function handleReset() {
        setCount(0)
    }


    return (
        <div className="App">
            <div className="box">
                <p>{count}</p>
                <button onClick={()=>setCount(count+1)} className="add">Add</button>
                <button onClick={()=>setCount(count-1)} className="sub">sub</button>
                <button onClick={()=>setCount(0)} className="reset">RESET</button>
            </div>
        </div>
    )
}


export default App;
