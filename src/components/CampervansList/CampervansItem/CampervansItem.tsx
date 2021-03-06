import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RatingBar from '../../Custom/RatingBar';
import classes from './CampervansItem.module.css';

interface Data {
    id: string,
    imgPath: string,
    title: string,
    city: string,
    state: string,
    price: number,
    rating: number,
    numOpinions: number
}

interface Props {
    data: Data
}

const CampervansItem = (props: Props) => {

    const {
        id,
        imgPath,
        title,
        city,
        state,
        price,
        rating,
        numOpinions
    } = props.data;

    const subtitleClasses = [
        classes.CampervansItem__subtitle,
        'CampervansDescription'
    ];

    const titleClasses = [
        classes.CampervansItem__title,
        'CampervansTitle'
    ];

    const priceClasses = [
        'CampervansTitle',
        classes.CampervansItem__price
    ];

    const numOpinionsClasses = [
        'CampervansDescription',
        classes['CampervansItem__num-opinions']
    ];

    return (
        <Col xs={12} md={6}>
            <Link className={classes.CampervansItem__container} to={'/campervans/' + id}>
                <div className={classes.CampervansItem}>
                    <Row>
                        <Col className={classes['CampervansItem__img-container']} xs={12} md={6}>
                            <Image className={classes.CampervansItem__img} src={imgPath} rounded />
                        </Col>
                        <Col xs={12} md={6}>
                            <div className={classes.CampervansItem__info}>
                                <div className={subtitleClasses.join(' ')}>
                                    CAMPER VAN &bull; { city.toUpperCase() }, { state.toUpperCase() }
                                </div>
                                <div className={titleClasses.join(' ')}>
                                    { title }
                                </div>
                                <div className={classes.CampervansItem__description}>
                                    <div className={priceClasses.join(' ')}>
                                        ${ price }
                                    </div>
                                    <div className={classes.CampervansItem__rating}>
                                        <RatingBar value={rating} />
                                        <div className={numOpinionsClasses.join(' ')}>
                                            ({ numOpinions })
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Link>
        </Col>
    );
}

export default CampervansItem;
