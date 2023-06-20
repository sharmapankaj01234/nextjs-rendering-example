import React, { useEffect, useState } from 'react'

export default function Page() {
    const [posts, setposts] = useState([]);
    const [showPosts, setshowPosts] = useState(false);
    useEffect(() => {
        if(posts.length>0){
            setshowPosts(true)
        }
    }, [posts]);
    const fetchData = async () => {
        const post = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
        if(post.status!= 200) {
            console.log(post.body)
        } else {
            const data = await post.json()
            setposts(data)
        }
    }
  return (
    <div>
        <button className='btn bg-blue' onClick={fetchData}>Render on client side</button>
        {showPosts && posts.map(post => (<li key={post.id}>{post.title}</li>))}
    </div>
  )
}