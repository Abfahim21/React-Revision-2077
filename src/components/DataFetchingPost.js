import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetchingPost = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

const handleClick =() =>{
    setIdFromButtonClick(id)
}
useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res =>{
        setPosts(res.data)
    })
    .catch(err=>{
        console.log(err)
    })

},[idFromButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={e =>setId(e.target.value)}/>
        <button onClick={handleClick}>Fetch Post</button>
        <div>
            {posts.title}
        </div>
    </div>
  )
}

export default DataFetchingPost