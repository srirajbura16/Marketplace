const environment = process.env.NODE_ENV;
let API_URL;

if (environment === 'development') {
  API_URL = 'http://localhost:5000';
} else {
  API_URL = `https://marketplace07.herokuapp.com`;
}

export default API_URL;
