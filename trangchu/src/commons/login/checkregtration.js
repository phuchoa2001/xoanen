export default function checkrestration (obj , state) {
  var search = obj.value;
  if(obj.name === "Email" && search.indexOf('@') === -1){
    return  "bạn nhập không phải Email"
  } 
  if(obj.value === ""){
    return  "bạn đã không nhập " + obj.name
  }
  if(obj.name === "checkpassword" && state.checkpassword !== state.Password) {
    return  "Mất Khẩu của bạn không trùng nhau"
  }
  if(obj.submit === 'submit' && state.checkbox !== true) {
    return "Bạn chưa đồng ý quỷ định của chúng tôi"
  }
 return null
}