
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
function generateCookie() {
  return s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-'
  + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-' + s4() +  s4() + s4() + '-'
}
export default function confirmEmailLink(obj) {
  console.log(obj);
  return obj.cookies + generateCookie() + obj.Password + generateCookie() + obj.Username;
}