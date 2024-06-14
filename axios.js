import axios from "axios";

const instance = axios.create({
  // used for hosting and payment ,making HTTP requests from a web browser or Node. js
  baseURL: 'http://127.0.0.1:5001/shopcart/us-central1/api'
 
});

export default instance;