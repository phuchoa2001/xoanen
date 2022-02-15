import Cookies from 'js-cookie'
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
function generateCookie() {
  return s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-'
  + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-'
}
export default function setcookie(key , cookie) {
  const createcookie = generateCookie();
  switch (key) {
    case "Detele":
    Cookies.remove('Cookies')
    break;
    case "set":
      Cookies.set('Cookies' , cookie)
    break
    case "get":
     return Cookies.get('Cookies')
    default:
    Cookies.set('Cookies', createcookie);
    return createcookie;
  }
}