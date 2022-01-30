/* create-react-app 프로젝트를 기반으로 한 코드. 따로 이 폴더로 빼온 것 (실행 X) */

/* 6-0의 문제에 대한 해결책: Effects (useEffect() 함수) */
//? 특정 코드 실행의 제한 (특정 코드가, 첫번째 render에만 실행되고, 다른 state변화에는 실행되지 않도록 함)
//! useEffect(): (ReactJS에서 지원해주는 함수) 2개의 argument를 가지는 function
// 1) effect: 딱 한번만 실행될 함수 (effect의 return값은 6-4- Cleanup function 참고)
// 2) deps: 마법같은친구..? (6-2-* 참고)
import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  // 1. 항상 실행될 코드
  console.log('This code runs all the time');

  // 2. useEffect() 사용
  // (컴포넌트가 처음에 render될 때의) 한번만 실행될 함수
  const thisRunsOnlyOnce = () => {
    console.log('I run only once');
  };
  // state가 변경되어도, 함수(ex. "thisRunsOnlyOnce()")가 한번만 실행된는 것을 확인해볼 수 있다!
  useEffect(thisRunsOnlyOnce, []); // 2번째 param은 일단 빈 객체로 (나중에 -> 6-2-*참고)

  // useEffect(() => {
  ////   console.log('CALL THE API...');
  //// }); // 이렇게 (deps param부분 생략)하니까 state변경될때마다 매번 실행되네.. 왜지

  // (위의 코드를 아래와 같이 단순화해서 표현가능)
  useEffect(() => {
    console.log('CALL THE API...');
  }, []);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </>
  );
}

export default App;
