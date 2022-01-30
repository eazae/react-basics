/* create-react-app 프로젝트를 기반으로 한 코드. 따로 이 폴더로 빼온 것 (실행 X) */

/*//! Deps: useEffect()의 2번째 argument */
// 또 다른 문제점을 보며, Deps가 그 문제점을 어떻게 해결하는지 보자.
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  // state 추가
  const [keyword, setKeyword] = useState('');

  const onClick = () => setValue((prev) => prev + 1);
  // 검색창의 event listener 함수 생성
  const onChange = (event) => setKeyword(event.target.value);

  console.log('state changed...'); // <input>에 변화가 생길 때마다 re-rendering 확인

  //! useEffect(): 특정 코드가 언제 실행될지 결정할 수 있는 방법
  //* ex1) component가 생성되는 첫 시작점 (6-1 참고)
  useEffect(() => {
    console.log('(I run only once) CALL THE API... ');
  }, []); //? no dependencies: 아무것도 watch하고 있지 않음
  // "counter"가 변할 때마다 + "keyword"가 변할 때마다 실행. 하지만, "keyword"에 변화가 있을 때만 검색이 실행되게 하고 싶음
  //// console.log('SEARCH FOR', keyword);
  // -> useEffect()를 활용
  //* ex2) 무언가가 update되었을 때
  useEffect(() => {
    // 첫 render 때도 이 부분이 실행되어버리기 때문에, 다음과 같이 조건문을 걸어줌
    // + 길이에 따라서도 조건문을 걸어줌 (ex. 길이가 5 이상일 때만 검색 api 호출)
    if (keyword !== '' && keyword.length > 5) {
      console.log("(I run when 'keyword' changes) SEARCH FOR", keyword);
    }
  }, [keyword]); //? "keyword"가 변할 때마다 코드를 실행하겠다고 React.js에 알려줌
  // [비교] 위의 line20 같은 경우에는, [] 비어있으므로, react가 아무것도 watch하고 있지 않음 -> 한번만 실행

  // (추가1) -> 우리는 useEffect()로 인해 이렇게 특정 무언가가 변화할 때 실행할 특정 코드를 지정할 수 있음
  useEffect(() => {
    console.log("(I run when 'counter' changes)')");
  }, [counter]);

  // (추가2) -> 여러개를 watch하게 할 수도 있음
  useEffect(() => {
    console.log("(I run when 'keyword' or(|) 'counter' changes");
  }, [keyword, counter]); //? 둘 중 하나라도 변경이 있으면, 코드 실행

  return (
    <>
      {/* 검색창 예제: state와 <input> 콤비네이션을 연습해보자 */}
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </>
  );
}

export default App;
