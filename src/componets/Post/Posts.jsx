import React from 'react';
import { useLoaderData} from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const postsData = useLoaderData()

    
   
    
    return (
        <div className='grid grid-cols-2 gap-6 my-16'>
            {
                postsData?.map(postData=><Post postData={postData} key={postData.id}></Post>)
            }
        </div>
    );
};

export default Posts;