import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Program = () => {
    const program=useLoaderData();
    const {_id,assignment,picture,quizzes,rating,text,title,videos}=program;
    console.log(program);
    return (
        
        <div className="py-5" style={{width: "30rem"}}>
            <div className="col">
                <div className="card">
                <img style={{height:'200px'}} src={picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {text}
                    </p>
                    <div className='d-flex justify-content-around'>
                        <p ><span className='fw-bold'>videos: </span>{videos}</p>
                        <p><span className='fw-bold'>assignment: </span>{assignment}</p>
                        <p><span className='fw-bold'>quizzes: </span>{quizzes}</p>
                    
                    </div>
                    <div className='d-flex justify-content-around'>
                        <p><span className='fw-bold' >rating:</span>{rating}</p>
                    </div>
                    <Link to='/checkout'><button className='w-100 btn btn-outline-primary'>Checkout</button></Link>
                </div>
             </div>
            </div>
        </div>
    );
};

export default Program;