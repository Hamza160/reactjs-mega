import { useEffect, useState } from "react"

export const FtechDataEffect = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            const data = await response.json()
            setPosts(data)
        }
        fetchPosts()
    }, [])

    return (
        <div>
            {posts.map(post => (
                <h1 key={Math.random()}>{post?.title}</h1>
            ))}
        </div>
    )
}
