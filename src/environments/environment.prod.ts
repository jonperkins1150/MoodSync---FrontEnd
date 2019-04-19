export let Api_Url = '';
switch(window.location.hostname){
  case 'https//localhost:4200':
  Api_Url += 'http://localhost:49729/';
    // Api_Url += 'https://moodsync.azurewebsites.net/';
    break;
  default:
    Api_Url += 'http://localhost:49729/';
    break;
}
export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'kcp-pieclient.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'https://kcp-pieapi.herokuapp.com'
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:<Port of your local API>';
}