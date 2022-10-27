import axios from 'axios';
import { resolve } from './resolve.js';

const USER_API_URL = process.env.REACT_APP_API_HOST + '/users';

export async function create(user) {
  const userCreation = resolve(axios({ method: 'post', url: USER_API_URL, data: user }));

  return await userCreation;
}

export async function login(user) {
  const LOGIN_URL = USER_API_URL + `/login`;
  return await resolve(axios({ method: 'post', url: LOGIN_URL, data: user }));
}

export async function findProfile(id) {
  const PROFILE_URL = USER_API_URL + `/id/` + id;
  return await resolve(axios({ method: 'get', url: PROFILE_URL, data: id }));
}

export async function updateProfile(user) {
  const PROFILE_URL = USER_API_URL + `/id/` + user.id;
  return await resolve(axios({ method: 'put', url: PROFILE_URL, data: user }));
}
