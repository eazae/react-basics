import { useEffect, useState } from 'react';

/* Movie App 예제 (part 1) */
//: recap of API data fetching and displaying -> (part2: how to change Pages in our app)
const App = () => {
  // state 2개: loading용 / data list용
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  /* use 'async-await' */
  // async 함수
  const getMovies = async () => {
    // i.
    //// const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
    //// const json = await response.json();
    // ii.(더 간결하게 하고싶음?) -> await의 패스츄리같은거임
    //                    | 여기에 await 한번 더 추가                                                                | 여기에 .json() 추가
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();

    setMovieList(json.data.movies);
    setLoading(false);
  };

  // 다음의 API에서 데이터를 가져옴
  useEffect(() => {
    //* 요즘에는 ".then()" 대신 'async-await을 주로 사용함 -> getMovies() 함수 보자
    //// fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
    ////   .then((response) => response.json())
    ////   .then((json) => {
    ////     setMovieList(json.data.movies);
    ////     setLoading(false);
    ////   });
    getMovies();
  }, []);
  // loading 상태에 따라서 출력 달라지게
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        // tag 사용할 경우 안에 js 사용할 때마다 {} 중첩하면 됨
        <div>
          {movieList.map((movie) => (
            // 즉 이 컴포넌트는 "movieList" array에 있는 각각의 원소에 적용이 되게 됨
            <div key={movie.id}>
              {/* 이미지도 추가해보자 */}
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              {/* "genres" 배열에 대해서도 map()으로 */}
              <ul>
                {movie.genres.map((genre) => (
                  // 이때, 여기에서도 key를 넘겨주는 것을 잊지 말자 (귀찮으므로, "genre"를 key로 주자 (중복 X이므로 ok))
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
