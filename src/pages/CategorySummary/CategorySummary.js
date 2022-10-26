import React from 'react';
import { Link } from 'react-router-dom';

const CategorySummary = ({result}) => {
    // console.log(result)
    const {_id,assignment,picture,quizzes,rating,text,title,videos}=result;
    return (
        <div>
             <div className="col">
                <div className="card">
                <img style={{height:'200px'}} src={picture} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {
                            text.length >50 ?
                            <p>{text.slice(0,150)+'...'} <Link to={`/program/${_id}`}>read More</Link></p>: <p>{text}</p>
                        }
                    </p>
                    <div className='d-flex justify-content-around'>
                        <p ><span className='fw-bold'>videos: </span>{videos}</p>
                        <p><span className='fw-bold'>assignment: </span>{assignment}</p>
                        <p><span className='fw-bold'>quizzes: </span>{quizzes}</p>
                    
                    </div>
                    <div className='d-flex justify-content-around'>
                        <p><span className='fw-bold' >rating:</span>{rating}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default CategorySummary;