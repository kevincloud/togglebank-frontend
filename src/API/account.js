import axios from 'axios';
import { resolve } from './resolve.js';

const ACCOUNT_API_URL = process.env.REACT_APP_API_HOST + '/accounts';

export async function getByUserId(userId) {
  return await resolve(axios({ method: 'get', url: `${ACCOUNT_API_URL}/userId/${userId}` }));
}

export async function create(userId, name, type) {
  const data = {
    userId,
    name,
    type
  };
  return await resolve(axios({ method: 'post', url: ACCOUNT_API_URL, data }))
}