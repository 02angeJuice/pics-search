import axios from 'axios';

const ACCESS_KEY =
  '5112106a9ee88feb947399bb01247f3cc83b62edd88e4852265ca98f64f3102b';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`
  }
});
