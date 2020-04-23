import axios from "axios";
// api 호출 시 반복되는 부분들을 한 번에 처리하기 위해
// instance를 설정해준다.
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});

const paramsObj = {
  params: {
    api_key: "9a8525c940f5235964bb5e78513b8720",
    language: "en-US"
  }
};
const { params: baseParams } = paramsObj;

export const tvApi = {
  topRated() {
    return api.get("tv/top_rated", paramsObj);
  },
  popular() {
    return api.get("tv/popular", paramsObj);
  },
  airingToday() {
    return api.get("tv/airing_today", paramsObj);
  },
  detail(id) {
    return api.get(`tv/${id}`, {
      params: {
        ...baseParams,
        append_to_response: "videos"
      }
    });
  },
  search(term) {
    return api.get("search/tv", {
      params: {
        ...baseParams,
        // url에 문자열을 넣기 위해 encoding
        query: encodeURIComponent(term)
      }
    });
  }
};

export const movieApi = {
  nowPlaying() {
    return api.get("movie/now_playing", paramsObj);
  },
  upcoming() {
    return api.get("movie/upcoming", paramsObj);
  },
  popular() {
    return api.get("movie/popular", paramsObj);
  },
  detail(id) {
    return api.get(`movie/${id}`, {
      params: {
        ...baseParams,
        append_to_response: "videos"
      }
    });
  },
  search(term) {
    return api.get("search/movie", {
      params: {
        ...baseParams,
        // url에 문자열을 넣기 위해 encoding
        query: encodeURIComponent(term)
      }
    });
  }
};
