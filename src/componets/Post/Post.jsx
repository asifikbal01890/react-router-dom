import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({postData}) => {
    const navigate = useNavigate();

const handleDeatils = (id) =>{
    navigate(`/posts/${id}`)
}

    return (
        <div className='border-2 p-6 border-red-400 rounded-lg'>
            <h1 className='text-2xl font-bold'>{postData.title}</h1>
            <p>{postData.body}</p>
            <button onClick={()=> handleDeatils(postData.id)} className='bg-green-600 py-3 px-6 rounded-md mt-4 font-semibold text-white'>Read More</button>
        </div>
    );
};

export default Post;