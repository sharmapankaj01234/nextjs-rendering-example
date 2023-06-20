import React from 'react'
import { promises as fs } from 'fs';
import path from 'path';

const Page = (props) => {
    return (
        <div>{props.blogs.map(x=>(<li key={x.title}>{x.title}</li>))}</div>
    )
}

export async function getStaticProps({ param }) {
    const jsonDirectory = path.join(process.cwd(), 'src/resources');
    const data = await fs.readFile(jsonDirectory + '/blog.json', 'utf8');
    //Data will be printed on terminal while building the app
    console.log('data:', data)
    return {props: JSON.parse(data)}
}

export default Page;
