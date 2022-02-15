import axios from "axios";
export default function apiFetterless(endpoint , method , body) {
    return axios({
      method: method , 
      url: `${endpoint}` , 
      data: body
    }).catch(err => {
        console.log(err);
    })

}