import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const MovieList = (props) => {
  
  const movies = useSelector(store => store.movieReducer.movies);

  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-bold">Filmler</h3>
        <NavLink className="px-3 py-2 rounded-md bg-green-600 text-white" to="/movies/add">
          Yeni Film Ekle
        </NavLink>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

function MovieListItem({ movie }) {
  return (
    <NavLink to={`/movies/${movie.id}`}>
      <div className="bg-white rounded-md shadow-md p-4 transition-transform transform hover:scale-105">
        <h4 className="text-xl font-semibold mb-2">{movie.title}</h4>
        <p className="text-sm text-gray-600">{movie.director}</p>
        <p className="text-sm font-bold mt-2">Metascore: {movie.metascore}</p>
      </div>
    </NavLink>
  );
}

export default MovieList;
