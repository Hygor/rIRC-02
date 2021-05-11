import { MovieCard } from './MovieCard';
import type { GenreResponseProps, MovieProps } from '../@types/custom';

import '../styles/content.scss';

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content(props: ContentProps) {

  const { selectedGenre, movies } = props;

  return (
    <div className="container">
      <header>
        <h1 className="category">
          Categoria: <strong>{selectedGenre.title}</strong>
        </h1>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}