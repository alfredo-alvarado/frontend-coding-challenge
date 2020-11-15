import React from 'react'
import GenericError from '../GenericError';

const NotFound = () => {
    return (
        <GenericError 
            status={404}
            message={'Page Not Found'}
        />
    )
}

export default NotFound;
