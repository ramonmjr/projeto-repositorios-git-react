import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  // baseURL: 'https://localhost:3333',
});
