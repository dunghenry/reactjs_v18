import React from 'react'
import useFetch from './hooks/useFetch'
const App = () => {
    const {data : users, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users?_limit=2")
    if(loading){
        return <p>Loading...</p>
    }
    return (
        <div>
            {users.map(user =><li key={user.id}>{user.name}</li>)}
        </div>
    )
}

export default App