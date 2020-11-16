import React, { useState, useEffect } from 'react';
import Loader from '../../components/Custom/Loader';
import { OutdoorsyDetailResponse } from '../../models/OutdoorsyDetailModel';
import { getSingleRental } from '../../services/OutdoorsyService';
import { Error } from '../../models/ErrorModel';
import GenericError from '../../components/Errors/GenericError';
import classes from './CampervansDetail.module.css';
import { Container, Row, Col } from 'react-bootstrap';

interface LayoutData {
    avatar_url: string,
    first_name: string,
    last_name: string,
    primary_img_url: string,
    secondary_img_url: string,
    logo_url: string
};

const CampervansDetail = () => {

    const urlSections = document.location.href.split('/');
    const rentalId = parseInt(urlSections[urlSections.length - 1]);

    const [rentalDetails, setRentalDetails] = useState<OutdoorsyDetailResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);

    let content = <Loader />;
    
    const getSupplementaryData = (data: OutdoorsyDetailResponse): LayoutData => {

        const { id: primaryImageId } = data.data.relationships.primary_image.data;

        let layoutData: LayoutData = {
            avatar_url: '',
            first_name: '',
            last_name: '',
            primary_img_url: '',
            secondary_img_url: '',
            logo_url: ''
        };

        for (const item of data.included) {
            if (item.type === 'users') {
                const { 
                    avatar_url,
                    first_name, 
                    last_name,
                    logo_url, 
                } = item.attributes;

                layoutData = {
                    ...layoutData,
                    avatar_url,
                    first_name,
                    logo_url,
                    last_name
                };
            }
            else if (item.type === 'images') {
                if (item.id === primaryImageId) {
                    layoutData = {
                        ...layoutData,
                        primary_img_url: item.attributes.url
                    };
                }
                else {
                    layoutData = {
                        ...layoutData,
                        secondary_img_url: item.attributes.url
                    };
                }
            }
        }
        return layoutData;
    };

    const loadRentalDetails = async () => {
        if (isNaN(rentalId)) { 
            setError({
                status: 404,
                message: 'Page Not Found'
            });
            return;
        }
        try {
            const res = await getSingleRental(rentalId);
            if (res.status === 200) {
                setRentalDetails(res.data);
                return;
            }
            setError({
                status: res.status,
                message: res.statusText
            });
        } 
        catch (error) {
            setError({
                status: 503,
                message: error
            });
        } 
    };

    useEffect(() => {
        loadRentalDetails();
    }, []);

    if (error) {
        return <GenericError {...error} />;
    }

    if (rentalDetails) {
        
        const { 
            name: title, price_per_day, location: { city, state }  
        } = rentalDetails.data.attributes;
        const {
            avatar_url, first_name, last_name, primary_img_url,
            secondary_img_url, logo_url
        } = getSupplementaryData(rentalDetails);

        content = (
            <Col>
                <div>{ title }</div>
                <div>{ price_per_day }</div>
                <div>{ city }</div>
                <div>{ state }</div>
                <div>{ avatar_url }</div>
                <div>{ first_name }</div>
                <div>{ last_name }</div>
                <div>{ primary_img_url }</div>
                <div>{ secondary_img_url }</div>
                <div>{ logo_url }</div>
            </Col>
        );
    }

    return (
        <div className={classes.CampervansDetail}>
            <Container className={classes.CampervansList__body} fluid>
                <Row noGutters>                    
                    { content }
                </Row>
            </Container>
        </div>
    );
}

export default CampervansDetail;
