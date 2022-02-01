/* (React Router의) 'Dynamic URL's (url에 변수를 넣을 수 있는 것) */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*//// <Route path="/movie" element={<Detail />} /> */}
        {/*//* Step 1. Dynamic URL: ":(변수)" 
          //! (':'를 꼭 붙여야 함!)
          //* Step 2. Movie.js의 <Link> 부분으로 가보자(id의 value를 넘겨줘야함) */}
        <Route path="/movie/:id" element={<Detail />} />
        {/* + React Router는 <Router>에 정의한 변수명을 그대로 사용함
        즉, 다음과 같이 바꾼다면,
        <Route path="/movie/:chillitomato" element={<Detail />} />
        useParams()를 사용해 콘솔에 값을 찍어보면,
        {chillitomato: '90097464'} 
        이렇게 출력됨 
        (즉 우리는 React Router에게, 이 url이 변수를 받는다는 사실만 말해주기만 하면 됨, (예를 들어 Movie.js에서 props명이랑 전혀상관없지))*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
