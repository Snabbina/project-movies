import React from "react";
import { Link } from "react-router-dom";

export const MovieThumb = ({ name, background_image, releaseDate, id }) => {
  return (
   
    <Link className="movie-link" to={`/movie/${id}`}>
      <section className="movie-list">
        <img
          className="movie-image"
          src={`http://image.tmdb.org/t/p/w500/${background_image}`}
          alt={name}
        />
        <div className="title-release-box">
          <p className="movie-release">{releaseDate}</p>
          <h1 className="movie-name">{name}</h1>
        </div>
        </section>
    </Link>
   
  );
};
