/* react-router-dom 사용법 */
//* Step 1. import 'react-router-dom' 아래와 같이
// react-router-dom: component들의 컬렉션
// (https://reactrouter.com/docs/en/v6/getting-started/tutorial)
import {
  // Router(라우터)에는 2종류: 1) Hash Router (v6에서 X..?)/ 2) Browser Router (차이점은 7-5-README.md 참고)
  BrowserRouter,
  Routes,
  Route,
  // 'Link'는 나중에 다시 다뤄볼 것임 (./components/Movie.js 가보자)
  //// Link
} from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    //* Step 2. <BrowserRouter> 안에 <Routes> -> <Route>들 정의
    <BrowserRouter>
      {/* v5의 <Switch>: Route를 찾는 역할 -> (Route: (baseURL을 제외한) URL 끝부분 ) 
                        Route를 찾으면, Component를 rendering해주는 역할 (Switch를 사용하는 이유: 한번에 하나의 Route만 렌더링하기 위함. 리액트에서는 원한다면 여러개의 컴포넌트들을 동시에 render할 수 있음) */}
      {/* (depricated - v5버전)
        //// <Switch>
        //// <Route path="/"><Home /></Route>
        //// ...
        //// </Switch> */}
      <Routes>
        {/*//* Step 3. 각각의 <Route> 안에 우리 Component를 써줄것임 
            1. 'path' prop 안에 정의해놓은 경로에 있으면,
            2. 'element' prop에 정의된 해당 Component를 rendering해줌 */}
        {/* 1st. Home 화면으로 가는 route (http://localhost:3000/) */}
        <Route path="/" element={<Home />} />
        {/* 2nd. Movie 상세화면으로 가는 route (http://localhost:3000/movie)*/}
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </BrowserRouter>

    //* Step 4. 하나의 Route에서 다른 Route로 이동하는 방법
    // (일반 HTML이었다면, <a href="(이동할경로)"/> 이렇게 했을거임
    // => [문제점] 전체 페이지가 re-load(새로고침)됨! Component 전체 새로 생성)
    //! React.js의 'Link': 브라우저 **새로고침 없이도** 유저를 다른 페이지로 이동시켜주는 컴포넌트
    // (전체 re-load 되는 것을 방지해줌)
    // see './components/Movie.js'

    //? To be Continued... (7-6): Dynamic URLs (url에 변수를 넣을 수 있는 것)
  );
}

export default App;
