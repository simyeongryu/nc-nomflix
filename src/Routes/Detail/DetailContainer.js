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
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    // Router가 기본적으로 Route들에게 전달하는 props
    // :id를 얻을 수 있다.
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;
    const numberId = Number(id);

    if (Number.isNaN(numberId)) {
      alert("상세페이지에 접근할 수 없습니다.");
      // componentDidMount 함수를 종료시키기 위해 return;
      return push("/");
    }
    let { result } = this.state;
    try {
      if (isMovie) {
        // let 변수를 활용한 객체 비구조화.
        // 전체 구문을 ()로 감싼다.
        ({ data: result } = await movieApi.detail(numberId));
      } else {
        // 위의 구문과 같다.
        const { data } = await tvApi.detail(numberId);
        result = data;
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
