import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarAlt } from '@fortawesome/free-regular-svg-icons';

interface Props {
    value: number
}

const RatingBar = (props: Props) => {

    const starColor = '#FE9A04';

    return (
        <ReactStars
            count={5}
            value={props.value}
            size={16}
            isHalf={true}
            color={starColor}
            activeColor={starColor}
            emptyIcon={<FontAwesomeIcon icon={faStarAlt} />}
            halfIcon={<FontAwesomeIcon icon={faStarHalfAlt} />}
            filledIcon={<FontAwesomeIcon icon={faStar} />}
            edit={false}
        />
    );
};

export default RatingBar;
