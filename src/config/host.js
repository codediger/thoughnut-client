let backendHost;
// const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'homeauction.herokuapp.com' || hostname === 'homeauction-app.herokuapp.com') {
  backendHost = 'https://homeauction-sails-1.herokuapp.com';
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:1337';
}

export const BASE_URL = `${backendHost}/`;