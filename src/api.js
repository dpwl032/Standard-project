import axios from "axios";

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: "http://localhost:4000",
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  function (config) {
    console.log("요청합니다!");
    return config;
  },
  function (erro) {
    console.log("요청실패!");
    return Promise.reject(erro);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  function (response) {
    console.log("요청받았어요!");
    return response;
  },
  function (error) {
    console.log("응답실패!");
    return Promise.reject(error);
  }
);

export default api;
