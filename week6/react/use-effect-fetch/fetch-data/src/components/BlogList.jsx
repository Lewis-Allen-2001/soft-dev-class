import { useState, useEffect } from "react"

export default function BlogList() {

    const [postsArray, setPosts] = useState([])

    useEffect(() => {
        async function fetchBlogPosts() {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                const posts = await res.json()
                setPosts(posts)
                console.log(posts)
            } catch (error) {
                console.log(error)
            }
        }
    fetchBlogPosts()
    }, [])


    return (
        <div>
            {postsArray.map((post) => {
                return (
<div key={post.id}>
<h2>{post.title}</h2>
<p>{post.body}</p>
</div>
                )
            })}
        </div>
    )
}
