import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    ).json();
    setMovieList(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movieList.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              //* Step 4. url에 넘겨줄 id 정보를 (prop로) 넘겨주자
              id={movie.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
