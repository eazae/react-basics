//! Home페이지를 위한 Route 파일을 생성함

import { useEffect, useState } from 'react';
// 폴더구조) "src/components" 폴더를 따로 생성해서 빼냈다
import Movie from '../components/Movie';

//? HomeRoute.js: "App" Component가 정의되어 있음 ("App.js"에서 코드 가져오자)
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
            //! 이 부분을 Component(ex. "Movie.js")로 따로 분리하자
            ////     <div key={movie.id}>
            ////       <img src={movie.medium_cover_image} />
            ////       <h2>{movie.title}</h2>
            ////       <p>{movie.summary}</p>

            ////       <ul>
            ////         {movie.genres.map((genre) => (
            ////           <li key={genre}>{genre}</li>
            ////         ))}
            ////       </ul>
            ////     </div>
            //* "Movie" 컴포넌트를 (import 후) render
            // (참고: vaniilaJS에서는 보통 "medium_cover_image"=> "mediumCoverImage"로 네이밍하지만,
            //    이건 우리 Component이기 때문에 부르고 싶은대로 명명해도 됨! (ex. coverImg={medium_cover_image} 로 해도됨!)
            //    단, 그 Component의 props의 이름과는 일치시켜줘야함. (ex. function Movie({coverImg, ...})))
            <Movie
              //! 그래도 여기에 key값을 추가해줘야 함 (주의)
              // recap: 'key' is only for React.js -> when you are rendering Components inside of a 'map()'
              key={movie.id}
              //? sending props to the Component
              //// medium_cover_image={movie.medium_cover_image}
              coverImg={movie.medium_cover_image} // (이름 간결하게 바꿔봄 "_" 마음에 안들어서)
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
