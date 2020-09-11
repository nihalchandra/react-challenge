import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-aaf3c/us-central1/api", //THE API (CLOUD FUNC) URL
});

export default instance;
