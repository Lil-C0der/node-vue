import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/admin/api",
});

// http.interceptors.response.use(
//   (result) => {
//     return result.data;
//   },
//   (err) => Promise.reject(err)
// );

export default http;
