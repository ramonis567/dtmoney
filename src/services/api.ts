import axios from 'axios';

export const api = axios.create({
    // baseURL: 'http://localhost:3000/api',   local
    baseURL: 'dtmoney-ramonis567.vercel.app/api', // remoto
})
