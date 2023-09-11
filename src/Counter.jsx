import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0); //return newValue and  function

    const handleAdd = () => {
        // const newCount = count + 1;
        // setCount(newCount);
        setCount(count + 1); 
    }

    const handleReduce = () => {
        setCount(count - 1);
    }

    return (
        <div style={
            {
                border: '2px solid purple',
                borderRadius: '8px',
                marginBottom: '15px ',
                padding: '15px' 
            }}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd} className = 'btn-style'>Add</button>
            <button onClick={handleReduce} className = 'btn-style'>Reduce</button>
        </div>
    )
} 