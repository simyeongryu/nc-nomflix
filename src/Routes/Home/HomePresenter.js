import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import ErrorMessage from "Components/ErrorMessage";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix </title>
    </Helmet>
    {/* ajax 처리가 끝났는지 확인 */}
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {/* ajax의 결과물이 존재하는지 확인 */}
        {nowPlaying && nowPlaying.length > 0 && (
          // CSS grid를 적용하기 위해 map 에 <span>을 감싸 return
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                // 만약 movie.release_date 값이 없으면 .slice is not a func 에러 발생.
                year={movie.release_date && movie.release_date.slice(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                // 만약 movie.release_date 값이 없으면 .slice is not a func 에러 발생.
                year={movie.release_date && movie.release_date.slice(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                // 만약 movie.release_date 값이 없으면 .slice is not a func 에러 발생.
                year={movie.release_date && movie.release_date.slice(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <ErrorMessage text={error} color="#e74c3c" />}
      </Container>
    )}
    ;
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
