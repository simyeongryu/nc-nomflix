import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import ErrorMessage from "Components/ErrorMessage";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0 20px;
`;

const Form = styled.form`
  padding-top: 20px;
  width: 100%;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SeachPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies of TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movies Results">
            {movieResults.map(movie => (
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
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Shows Results">
            {tvResults.map(show => (
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
        {movieResults &&
          tvResults &&
          movieResults.length <= 0 &&
          tvResults.length <= 0 && (
            <ErrorMessage text="Nothing Found" color="#7f8c8d" />
          )}
      </>
    )}
  </Container>
);

SeachPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SeachPresenter;
