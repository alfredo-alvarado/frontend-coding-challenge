import React, { useEffect, useState } from 'react'
import { OutdoorsyListResponse } from '../../models/OutdoorsyListModel';
import { getRentalList } from '../../services/OutdoorsyService';
import SearchBar from '../../components/CampervansList/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import SquaredButton from '../../components/Custom/SquaredButton';
import CampervansItem from '../../components/CampervansList/CampervansItem';
import classes from './CampervansList.module.css';

const CampervansList = () => {

    const [results, setResults] = useState<null | OutdoorsyListResponse>(null);
    const [error, setError] = useState<string>('');

    let content = <>Ok</>;

    const updateResultsHandler = async () => {
        
        try {
            const res = await getRentalList('', 1);
            if (res.status === 200) {
                setResults(res.data);
                return;
            }
            setError('There was an error loading the data');
        } 
        catch (error) {
            setError('There was an unexpected error');
        }
    };

    const buildCampervansList = (res: OutdoorsyListResponse) => {
        return res.data.map(
            item => {                
                const itemData = {
                    imgPath: item.attributes.primary_image_url,
                    title: item.attributes.name,
                    city: item.attributes.location.city,
                    state: item.attributes.location.state,
                    price: item.attributes.price_per_day,
                    rating: item.attributes.score,
                    numOpinions: item.attributes.reviews_num
                };
                return (
                    <CampervansItem
                        key={item.id}  
                        data={itemData} 
                    />
                );
            }
        )     
    };

    useEffect(
        () => {
            updateResultsHandler();
        }, []
    );

    if (error) {
        return (
            <div>
                Error!
            </div>
        );
    }

    if (results) {
        
        if (results.data.length) {
            content = (
                <>
                    { buildCampervansList(results) }
                </>
            );
        }
        else {
            content = (
                <Col>
                    No results found for your search
                </Col>
            );
        }
    }

    return (
        <div className={classes.CampervansList}>
            <div className={classes.CampervansList__title}>
                Campervans
            </div>
            <SearchBar
                formSubmitted={() => {}}
                inputChanged={()=>{}}
                inputValue={''} 
            />
            <Container className={classes.CampervansList__body} fluid>
                <Row noGutters>                    
                    { content }
                </Row>
            </Container>
            <div className={classes.CampervansList__footer}>
                <SquaredButton
                    clicked={() => {}}
                    type="button"
                >
                    Load more
                </SquaredButton>
            </div>
        </div>
    );
}

export default CampervansList;
