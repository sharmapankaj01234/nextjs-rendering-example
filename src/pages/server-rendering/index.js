import React from 'react'

const Page = (props) => {
    console.log(props.posts)
    return (
        <div>{props.posts.map(x=> (<li key={x.id}>{x.title}</li>))}</div>
    )
}

export async function getServerSideProps({ param }) {
   const post = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
    return {props: {posts: await post.json()}}
}

export default Page;