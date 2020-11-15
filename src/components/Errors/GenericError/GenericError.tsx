import React from 'react';
import classes from './GenericError.module.css';
import { Error } from '../../../models/ErrorModel';

const GenericError = (props: Error) => {

    const statusClasses = [
        classes.GenericError__title,
        'CampervansTitle'
    ];

    const messageClasses = [
        classes.GenericError__message,
        'CampervansDescription'
    ];

    return (
        <div className={classes.GenericError}>
            <div className={statusClasses.join(' ')}>
                { props.status }
            </div>
            <div className={messageClasses.join(' ')}>
                { props.message }
            </div>
        </div>
    )
}

export default GenericError;