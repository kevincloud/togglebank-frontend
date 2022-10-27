import axios from 'axios';
import { resolve } from './resolve.js';

const CRYPTO_API_URL = process.env.REACT_APP_API_HOST + '/crypto';

export async function getCryptoFeedById(cryptoId){
    return await resolve(axios({method: 'get', url: `${CRYPTO_API_URL}/id/${cryptoId}`}));
}