import axios from "axios";

const api = axios.create({
    baseURL: "https://squad-25-provihack.herokuapp.com/",
  });
  
  export default api;
