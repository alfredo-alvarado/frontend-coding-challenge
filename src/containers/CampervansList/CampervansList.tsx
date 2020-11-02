import React, { useEffect, useState } from 'react'
import { OutdoorsyListResponse } from '../../models/OutdoorsyListModel';
import { getRentalList } from '../../services/OutdoorsyService';

const CampervansList = () => {

    const [results, setResults] = useState<null | OutdoorsyListResponse>(null);
    const [error, setError] = useState<string>('');

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
        return (
            <h1>
                Done!
            </h1>
        );
    }

    return (
        <div>
            Loading
        </div>
    );
}

export default CampervansList;
