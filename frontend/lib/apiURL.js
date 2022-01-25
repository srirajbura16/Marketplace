const environment = process.env.NODE_ENV;
let apiURL;

if (environment === 'development') {
  apiURL = 'http://localhost:5000';
} else {
  apiURL = 'http://localhost:5000';
}

export default apiURL;
