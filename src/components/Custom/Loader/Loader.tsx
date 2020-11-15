import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import classes from './Loader.module.css';

const Loader = () => {
    return (
        <Col className={classes.Loader__container}>
            <Spinner 
                className={classes.Loader} 
                animation="border" 
            />
        </Col>
    )
};

export default Loader;
