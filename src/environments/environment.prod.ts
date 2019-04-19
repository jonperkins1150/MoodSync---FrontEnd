export let Api_Url = '';
switch(window.location.hostname){
  case 'https//localhost:4200':
  Api_Url += 'http://localhost:49729/';
    break;
  case 'https://moodsync1150.herokuapp.com/':
    Api_Url += 'https://moodsync.azurewebsites.net/';
    break;
  default:
    Api_Url += 'https://moodsync1150.herokuapp.com/';
    break;
}
export const environment = {
  production: true
};
