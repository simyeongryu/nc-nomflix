// 스테이트 값을 가진 컴포넌트
import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  // 생성자. 해당 컴포넌트가 실행되면 최초로 실행
  constructor(props) {
    super(props);

    const {
      location: { pathname }
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      isTV: pathname.includes("/tv/")
    };
  }

  async componentDidMount() {
    // Router가 기본적으로 Route들에게 전달하는 props
    // :id를 얻을 수 있다.
    const {
      match: {
        params: { id }
      },
      history: { push },
      location: { pathname }
    } = this.props;

    const { isMovie, isTV } = this.state;
    const numberId = Number(id);

    if (Number.isNaN(numberId)) {
      alert("상세페이지에 접근할 수 없습니다.");
      // componentDidMount 함수를 종료시키기 위해 return;
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        const { data } = await movieApi.detail(numberId);
        result = data;
      } else if (isTV) {
        const { data } = await tvApi.detail(numberId);
        result = data;
      } else {
        throw Error("잘못된 상세페이지 url 접근: movie인지 tv인지 알 수 없음.");
      }
    } catch (e) {
      console.log(e);
      this.setState({ error: "Can't find detail info" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
