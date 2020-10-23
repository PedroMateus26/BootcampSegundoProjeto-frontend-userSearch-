import axios, {Method} from 'axios';

type RequestParams={
    url:string;
    method?:Method;
}

const BASE_URL='https://api.github.com/users/'

export const makeRequest=({url,method='GET'}:RequestParams)=>{
   return axios ({
    method,
    url:`${BASE_URL}${url}`
   })
}