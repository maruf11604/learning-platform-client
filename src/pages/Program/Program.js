import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef(); 

const Program = () => {
    const program=useLoaderData();
    const {_id,assignment,picture,quizzes,rating,text,title,videos}=program;
    console.log(program);
    return (
        
        <div className="py-5" style={{width: "30rem"}}>
            
            
            <div className="col">
                
                <div className="card">
                <img style={{height:'200px'}} src={picture} className="card-img-top" alt="..."/>
                <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='btn btn-outline-primary text-danger' onClick={toPdf}>Pdf</button>}
                </Pdf>
                <div className='invisible' ref={ref}>
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                </div>
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
                    <Link to={`/checkout/${_id}`}><button className='w-100 btn btn-outline-primary'>Checkout</button></Link>
                </div>
             </div>
            </div>
        </div>
    );
};

export default Program;