import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import ErrorMessage from "Components/ErrorMessage";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>TV Shows | Nomflix </title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated TV Shows">
            {topRated.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                // 만약 show.first_air_date 값이 없으면 .slice is not a func 에러 발생.
                year={show.first_air_date && show.first_air_date.slice(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular TV Shows">
            {popular.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                // 만약 show.first_air_date 값이 없으면 .slice is not a func 에러 발생.
                year={show.first_air_date && show.first_air_date.slice(0, 4)}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title="AiringToday TV Shows">
            {airingToday.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                // 만약 show.first_air_date 값이 없으면 .slice is not a func 에러 발생.
                year={show.first_air_date && show.first_air_date.slice(0, 4)}
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

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
