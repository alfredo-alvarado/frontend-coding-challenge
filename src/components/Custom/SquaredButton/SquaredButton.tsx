import React, { ReactNode } from 'react'
import { Button } from 'react-bootstrap';
import classes from './SquaredButton.module.css';

interface Props {
    clicked?: () => void,
    children: ReactNode,
    type: string
}

const SquaredButton = (props: Props) => {

    const {clicked, type, children} = props;

    const btnClasses = [
        classes.SquaredButton,
        'CampervansUI'
    ];

    return (
        <Button
            type={type} 
            className={btnClasses.join(' ')} 
            onClick={clicked}
        >
            { children }
        </Button>
    );
};

export default SquaredButton;
