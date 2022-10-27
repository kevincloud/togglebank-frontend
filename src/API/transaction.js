import axios from 'axios';
import { resolve } from './resolve.js';

const TRANSACTION_API_URL = process.env.REACT_APP_API_HOST + '/transactions';

export async function getAllForAccount(accountNumber) {
  return await resolve(axios({
      method: 'get', url: `${TRANSACTION_API_URL}/account/${accountNumber}`
    }));
}

export async function getAccountBalance(accountNumber) {
  return await resolve(axios({
    method: 'get', url: `${TRANSACTION_API_URL}/getaccountbalance/${accountNumber}`
  }));
}