import { useEffect, useState } from 'react';

/* Movie App 예제 (part 1) */
//: how to change Pages in our app
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
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)).json();

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
  return <>{loading ? <h1>Loading...</h1> : null}</>;
};

export default App;
