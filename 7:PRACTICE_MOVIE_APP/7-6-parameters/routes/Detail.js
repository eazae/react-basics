import { useEffect } from 'react';
// import 하자
import { useParams } from 'react-router-dom';

//! useParams(): React Router에서 제공하는 함수 중, url에 있는 값을 반환해주는 함수
function Detail() {
  //* Step 7. useParams()를 사용해 url에서 값을 뽑아오자
  ////const likeThis = useParams();
  ////console.log(likeThis); //> {id: '(url의id값)'} 출력됨
  // React Router는 내가 <Route>에 사용한 변수명(see "App.js")을 그대로 사용하고 있음
  // (따라서 간단하게 아래와 같이 해도 됨 :))
  const { id } = useParams();
  console.log(id);

  /* 받아온 "id"값을 가지고, API 요청을 날려보자 */
  //* Step 8. fetch data from API (이전 내용 복습(see 7-3))
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // (확인)
    console.log(json);
  };
  useEffect(() => {
    //! 주의: await은 async 함수 내부에 있지 않으면 사용할 수 X
    //// const json = await(
    ////   await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    //// ).json();
    getMovie();
  }, []);

  /*// todo CHALLENGE: 
  - loading 등 처리 추가 (Home.js처럼)
  - state에 저장: 영화 상세정보 (json형태)
  - 데이터 디스플레이: 아래 return 부분에서.
  - Navbar 추가: hint) 'Link'를 활용
  */
  return <h1>Detail</h1>;
}

export default Detail;
