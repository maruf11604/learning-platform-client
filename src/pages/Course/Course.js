import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Course = ({value}) => {
    const {mode,bgMode}=useContext(AuthContext);
    const {_id,assignment,picture,quizzes,rating,text,title,videos}=value;
    
    // console.log(value)
    return (
        <div >
             <div className="col">
                <div className="card">
                <img style={{height:'200px'}} src={picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {
                            text.length >50 ?
                            <>{text.slice(0,150)+'...'} <Link to={`/program/${_id}`}>read More</Link></>: <p>{text}</p>
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

export default Course;