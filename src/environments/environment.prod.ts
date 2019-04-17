export let Api_Url = '';
switch(window.location.hostname){
  case 'https//localhost:4200':
    Api_Url += 'https://moodsync.azurewebsites.net/';
    break;
  default:
    Api_Url += 'https://moodsync.azurewebsites.net/';
    break;
}
export const environment = {
  production: true
};
