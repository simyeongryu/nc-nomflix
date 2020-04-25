// 스테이트 값을 가진 컴포넌트
import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };
  // 각각의 요청을 분리된 get으로 만들어서 할 수 있다.
  // ex) getNowPlaying ..
  // componentDidMount 안에는 this를 이용 호출
  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();

      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();

      const {
        data: { results: popular }
      } = await movieApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch (e) {
      console.log(e);
      this.setState({
        error: "Can't find movies information."
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
