import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Category from '../Category/Category';

const AllCourse = ({values}) => {
    const {mode,bgMode}=useContext(AuthContext);
    const [topics,setTopics]=useState([]);

    useEffect(()=>{
        fetch('https://learning-platform-server-assignment.vercel.app/topics')
        .then(res=>res.json())
        .then(data => setTopics(data))
    },[])
    return (
        <div className='mt-5'>
            
            {
                topics.map(topic=> 
                <p key={topic.id}> <Link className='text-decoration-none border border-primary p-1 rounded-pill' to={`/category/${topic.id}`}>{topic.name}</Link></p>)
            }
            
        </div>
    );
};

export default AllCourse;