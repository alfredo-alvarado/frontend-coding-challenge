import axios, { AxiosPromise } from 'axios';
import { OutdoorsyListResponse } from '../models/OutdoorsyListModel';
import { OutdoorsyDetailResponse } from '../models/OutdoorsyDetailModel';

const outdoorsyUrl = 'https://search.outdoorsy.co/rentals';

const getRentalList = ( searchTerms: string, page: number ):
    AxiosPromise<OutdoorsyListResponse> => {
    
    const pageLimit = 8;
    
    let endPoint = `${ outdoorsyUrl }?filter[type]=camper-van&address=san%20francisco`;
    endPoint += `?filters[keywords]=${ encodeURI(searchTerms) }`;
    endPoint += `?page[limit]=${ pageLimit }`;
    endPoint += `?page[offset]=${ pageLimit*(page - 1) }`;

    return axios.get( endPoint );
};

const getSingleRental = ( rentalId: number ):
    AxiosPromise<OutdoorsyDetailResponse> => {

    const endPoint = `${ outdoorsyUrl }/${ rentalId }`;
    return axios.get( endPoint );
};

export {
    getRentalList,
    getSingleRental
};