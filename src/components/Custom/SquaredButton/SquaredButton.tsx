import React, { ReactNode } from 'react'
import { Button } from 'react-bootstrap';
import classes from './SquaredButton.module.css';

interface Props {
    clicked: () => void,
    children: ReactNode
}

const SquaredButton = (props: Props) => {

    const btnClasses = [
        classes.SquaredButton,
        'CampervansUI'
    ];

    return (
        <Button className={btnClasses.join(' ')} onClick={props.clicked}>
            { props.children }
        </Button>
    );
};

export default SquaredButton;
