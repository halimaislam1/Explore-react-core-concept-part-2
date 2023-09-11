import { useEffect, useState } from "react"

export default function Users(){
const [users, setUsers] = useState([]);

useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
}, []) //take two paremeter . callback function and dependency.

    return(
        <div>
            Users: {users.length}
        </div>
    )
}

/**
 * declare a state to hold the data. ex: useState
 * useEffect 
 * use fetch inside useEffect function
 * 
 */