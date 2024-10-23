import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
const params = useParams()
const [data, setData] = useState({})



useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then(res => res.json())
        .then(data => setData(data))
}, [])



    return (
        <div>
            <h1 className='text-2xl font-bold my-16'>{data.title}</h1>
        </div>
    );
};

export default PostDetails;