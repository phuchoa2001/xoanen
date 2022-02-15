import axios from "axios";

class AxiosService {
  constructor () {
    const instace = axios.create();
    instace.interceptors.request.use(this.handleSuccess , this.handleError);
    this.instace = instace;
  }
  handleSuccess(responese) {
    return responese;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(url) {
    return this.instace.get(url)
  }
  post(url , body) {
    return this.instace.post(url , body);
  }
  put(url , body) {
    return this.instace.put(url , body);
  }
}
export default new AxiosService();