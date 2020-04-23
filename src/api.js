import axios from "axios";
// api 호출 시 반복되는 부분들을 한 번에 처리하기 위해
// instance를 설정해준다.
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});
// '/tv/popular'처럼 '/'로 시작하면 절대경로로 가져오기 때문에 안 된다.
api.get("tv/popular", {
  params: {
    api_key: "9a8525c940f5235964bb5e78513b8720",
    language: "en-US"
  }
});

export default api;
