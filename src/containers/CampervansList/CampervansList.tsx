import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { OutdoorsyListResponse } from '../../models/OutdoorsyListModel';
import { getRentalList } from '../../services/OutdoorsyService';
import SearchBar from '../../components/CampervansList/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import SquaredButton from '../../components/Custom/SquaredButton';
import CampervansItem from '../../components/CampervansList/CampervansItem';
import classes from './CampervansList.module.css';
import Loader from '../../components/Custom/Loader';

const CampervansList = () => {

    const [results, setResults] = useState<null | OutdoorsyListResponse>(null);
    const [error, setError] = useState<string>('');
    const [searchedText, setSearchedText] = useState<string>('');
    const [activatedSearch, setActivatedSearch] = useState<boolean>(true);
    const [enabledLoadMore, setEnabledLoadMore] = useState<boolean>(true);
    const [page, setPage] = useState(1);

    let content = <Loader />;
    let footer = null;

    const enableLoadMoreHandler = () => setEnabledLoadMore(true);

    const disableLoadMoreHandler = () => setEnabledLoadMore(false);

    const activateSearchHandler = () => setActivatedSearch(true);

    const deactivateSearchHandler = () => setActivatedSearch(false);

    const pageChangedHandler = (pageSelected: number) => setPage(pageSelected);

    const loadMoreHandler = () => {
        pageChangedHandler(page + 1);
        activateSearchHandler();
    };

    const searchChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchedText(event.target.value);
    };

    const searchSubmittedHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        pageChangedHandler(1);
        activateSearchHandler();
    };

    const validateIfLoadMore = (res: OutdoorsyListResponse) => {
        const { total } = res.meta;
        const nextItems = total - page * 8;
        if (nextItems <= 0) {
            disableLoadMoreHandler();
            return;
        }
        enableLoadMoreHandler();
    };

    const updateResultsHandler = async () => {     
        try {
            const res = await getRentalList(searchedText, page);
            if (res.status === 200) {
                const response = {...res.data};
                if (page > 1) {
                    const oldResults = [...results!.data];
                    const newResults = [...res.data.data];
                    response.data = [
                        ...oldResults,
                        ...newResults
                    ];
                }
                validateIfLoadMore(response);
                setResults(response);
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
            if (activatedSearch) {
                updateResultsHandler();
            }
            deactivateSearchHandler();
        }, [activatedSearch]
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
                <Col className={classes['CampervansList__no-results']}>
                    No results found for your search
                </Col>
            );
        }
    }

    if (enabledLoadMore) {
        footer = (
            <div className={classes.CampervansList__footer}>
                <SquaredButton
                    clicked={loadMoreHandler}
                    type="button"
                >
                    Load more
                </SquaredButton>
            </div>
        );
    }

    return (
        <div className={classes.CampervansList}>
            <div className={classes.CampervansList__title}>
                Campervans
            </div>
            <SearchBar
                formSubmitted={searchSubmittedHandler}
                inputChanged={searchChangedHandler}
                inputValue={searchedText} 
            />
            <Container className={classes.CampervansList__body} fluid>
                <Row noGutters>                    
                    { content }
                </Row>
            </Container>
            { footer }
        </div>
    );
}

export default CampervansList;
