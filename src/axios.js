import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "http://localhost:5001/app1-85bda/us-central1/api",
});

export default instance;