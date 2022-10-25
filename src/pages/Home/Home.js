import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './Home.css'

const Home = () => {
    
    const {mode,bgMode}=useContext(AuthContext)
       
    return (
        
            <div >
                <div className='img '>
                    <h1 className='header pt-5 px-5  text-center text-white'>Its never too late to study!</h1>
                    <p className='para text-center text-white '>Any successful career starts with good education</p>
                
               </div>

                <div className={bgMode}>
                    <h1 className='text-center pt-3' ><p className={mode}>Welcome</p></h1>
                  <div className="container overflow-hidden">
                        <div className="row g-5 pb-5" >
                            <div className="col-sm-6 col-12"style={{bgMode}} >
                              <div className="p-1 border "><p className={mode}>{'The value of good education cannot be underestimated. From the childhood and up to the adult age each of us tries to discover something new, have deeper knowledge of various subjects and simply learn the world better. Based on the level of your education you can earn respect and recognition in the society.'.slice(0,200)+"..."}</p></div>
                            </div>
                            <div className="col-sm-6 col-12"style={{bgMode}} >
                              <div className="p-1 border "><p className={mode}>{'You will get your future job and climb the career ladder depending on the knowledge  that you get at school, college, university, etc. Are you a fast learner? How quickly can you solve different tasks and find the tight solution of a problem? These are only some of the factors that determine your professional success.'.slice(0,200)+"..."}</p></div>
                            </div>
                            
                        </div>
                    </div>
               </div>
            </div>

        
    );
};

export default Home;