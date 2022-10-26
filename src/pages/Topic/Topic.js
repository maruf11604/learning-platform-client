import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AllCourse from '../AllCourse/AllCourse';
import Category from '../Category/Category';
import Course from '../Course/Course';

const Topic = () => {
    const {mode,bgMode}=useContext(AuthContext);
    const values=useLoaderData();
    // console.log(values)
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='4'>
                        <AllCourse values={values}></AllCourse>
                    </Col>
                    <Col lg='8'>
                        <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
                        {
                            values.map(value => <Course key={value.id} value={value}></Course>)
                        }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Topic;