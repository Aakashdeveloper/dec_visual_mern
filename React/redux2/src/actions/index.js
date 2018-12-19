import { baseUrl } from '../constants/ApiUrl';

export function latestNews(){
    const request = fetch(`${baseUrl}articles?_end=3`,
    {method:'GET'})
        .then(response => response.json())
        return{
            type:'GET_LATEST',
            payload: request
        }
}


export function otherNews(){
    const request = fetch(`${baseUrl}articles?_start=3&_end=10`,
    {method:'GET'})
        .then(response => response.json())
        return{
            type:'GET_OTHER',
            payload: request
        }
}