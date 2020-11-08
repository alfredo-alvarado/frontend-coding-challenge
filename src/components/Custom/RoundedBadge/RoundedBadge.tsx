import React, { ReactNode } from 'react'
import { Badge } from 'react-bootstrap';
import classes from './RoundedBadge.module.css';

interface Props {
    children: ReactNode
}

const RoundedBadge = (props: Props) => {

    const btnClasses = [
        classes.RoundedBadge,
        'CampervansUI'
    ];

    return (
        <Badge className={btnClasses.join(' ')}>
            { props.children }
        </Badge>
    );
};

export default RoundedBadge;