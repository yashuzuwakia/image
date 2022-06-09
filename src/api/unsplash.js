import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID -8mOB8ZJ05TvRSjR3FlJedUDCKT5y46ot0ke-AETa3I'
    }
})