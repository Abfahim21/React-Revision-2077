import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetchingPost = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)

useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res =>{
        setPosts(res.data)
    })
    .catch(err=>{
        console.log(err)
    })

},[id])
  return (
    <div>
        <input type="text" value={id} onChange={e =>setId(e.target.value)}/>
        <div>
            {posts.title}
        </div>
    </div>
  )
}

export default DataFetchingPost