import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOutDetails = () => {
    const check =useLoaderData();
    const {_id,assignment,picture,quizzes,rating,text,title,videos}=check;
    
    
    return (
        <div className="card text-bg-primary mb-3" style={{width:"28rem"}}>
            <div className="card-body">
                <h5 className="card-title">Name:{title}</h5>
                <p className="card-text">Id:{_id}</p>
            </div>
        </div>
    );
};

export default CheckOutDetails;