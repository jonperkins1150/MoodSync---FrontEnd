export let Api_Url = '';
//Temporary addresses, change later **********************************************************
switch(window.location.hostname){
  case 'https//localhost:4200':
    Api_Url += 'https://moodsync.azurewebsites.net/';
  default:
    Api_Url += 'https://moodsync.azurewebsites.net/';;
    break;
}
export const environment = {
  production: true
};