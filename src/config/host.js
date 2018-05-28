let backendHost;
// const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

if (hostname === 'thoughnut.herokuapp.com') {
  backendHost = 'https://homeauction-sails-1.herokuapp.com';
} else {
  backendHost = 'http://localhost:4000';
}

export default backendHost;