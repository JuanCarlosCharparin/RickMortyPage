import { useState, useEffect } from "react";

const Api = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return(
        <div className="App">
            <h1>Fetch</h1>
            <div className="card">
               <ul>
                    {data?.map((user) => (<li key={user.id}>{user.name}</li>))}
                </ul> 
            </div>
        </div>
    )
}

export default Api
