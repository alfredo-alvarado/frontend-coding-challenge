import React, { useEffect, useState } from 'react'
import { OutdoorsyListResponse } from '../../models/OutdoorsyListModel';
import { getRentalList } from '../../services/OutdoorsyService';
import SearchBar from '../../components/CampervansList/SearchBar';
import { Container, Row } from 'react-bootstrap';
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
        content = (
            <>
                <CampervansItem />
                <CampervansItem />
            </>
        );   
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
            <div className="text-center">
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
