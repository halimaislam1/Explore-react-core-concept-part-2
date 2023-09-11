import { useState } from "react"

export default function Team() {
    const [team , setTeam] = useState(11) //team is curret state and setTeam is 
    // a functioon and 11 is a initial value.

    const handleAdd = () => {
        setTeam(team + 1);
    }

    const handleRemove = () => {
        setTeam(team - 1);
    }

    return (
        <div style={{
            border: '2px solid  blue',
            borderRadius: '8px',
            padding: '15px',
            margin: '15px'
        }}>
            <h3>Players: {team} </h3>
            <button onClick={handleAdd} className='btn-style'>Add</button>
            <button onClick={handleRemove} className='btn-style'>Remove</button>
        </div>
    )
}

